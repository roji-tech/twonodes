"use server";

// import { OneTimeUserPropertyModel } from "@/models/PaymentModel";
import { revalidatePath } from "next/cache";
import { uploadToS3FromServer } from "./awsActions";
import {
  initializePaystack,
  verifyPaystackTransaction,
} from "./paystackActions";
import { PrismaClient } from "@prisma/client";

export const saveToDatabase = async (data: any) => {
  const prisma = new PrismaClient();

  try {
    data.paymentStatus = "Pending";
    data.status = "Pending";
    data.statusMessage = "Request is being processed";

    const newProperty = await prisma.oneTimeUserProperty.create({
      data: {
        ...data,
      },
    });

    console.log("New property saved:", newProperty);

    return {
      success: true,
      message: "Data saved successfully",
      data: newProperty,
    };
  } catch (error) {
    console.error("Error saving to database with Prisma:", error);
    return { success: false, message: "Failed to save data", error };
  } finally {
    await prisma.$disconnect();
  }
};

const updateTransactionStatus = async (
  reference: string,
  status: string,
  paymentStatus: string,
  statusMessage: string,
  error: string | null
) => {
  const prisma = new PrismaClient();
  try {
    const updatedTransaction = await prisma.oneTimeUserProperty.update({
      where: { reference },
      data: {
        status,
        paymentStatus,
        statusMessage,
        error,
      },
    });
    return updatedTransaction;
  } catch (error) {
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

export const saveFormDataAndInitiatePaystack = async (formData: FormData) => {
  try {
    const email = formData.get("email") as string;
    const requester = formData.get("requester") as string;
    const address = formData.get("address") as string;
    const location = JSON.parse(formData.get("location") as string);
    const lga = formData.get("lga") as string;
    const totalCost = parseFloat(formData.get("totalCost") as string);
    const comments = formData.get("comments") as string;
    const parcelId = formData.get("parcelId") as string;

    // const files = formData.getAll("files"); // Explicitly cast to File[]
    const files = formData
      .getAll("files")
      .filter((file) => file instanceof File) as File[];

    // for (let index = 0; index < files.length; index++) {
    //   const file = files[index];
    //   console.log(file instanceof File);
    // }

    let uploadedFilesUrls: string[] = [];

    if (files.length > 0) {
      uploadedFilesUrls = await uploadToS3FromServer(files);
    }

    // throw new Error("error");

    // Upload files to AWS S3

    console.warn("FORM DATA UPLOADING", "\n\n\n\n\n\n");

    console.log("formData", formData);

    console.error("\n\n\n\n\n\n", "FORM DATA UPLOADED");

    if (files && files.length > 0) {
      uploadedFilesUrls = await uploadToS3FromServer(files);
    }

    const data = {
      email,
      requester,
      address,
      lat: location?.lat,
      lng: location?.lng,
      lga,
      totalCost,
      comments,
      parcelId,
      supportingDocumentsUrls: uploadedFilesUrls,
    };

    const result = await saveToDatabase(data);

    console.log("Result from saveToDatabase:", result);

    if (!result.success) {
      return { error: "Failed to save data", status: 500 };
    }

    // Optionally, you can initiate Paystack payment here
    const paystackResponse: any = await initializePaystack({
      email,
      amount: totalCost * 100,
      reference: result?.data?.reference!,
      requester,
      address,
      lga,
      comments,
    });

    if (!paystackResponse || paystackResponse.status !== true) {
      // update the payment status in the database
      await updateTransactionStatus(
        result?.data?.reference!,
        "Failed",
        "Failed",
        paystackResponse.message,
        null
      );

      return { error: `${paystackResponse.message}`, status: 500 };
    }

    console.log("Paystack response:", paystackResponse);

    revalidatePath("/reva/requestform");
    // Send the Paystack checkout URL to the frontend
    return {
      status: 200,
      success: paystackResponse.status,
      paystack: paystackResponse.data,
      data: { ...result.data }, // Ensure data is a plain object
    };

    // Optionally, you can revalidate a specific path or redirect after saving
  } catch (error) {
    console.error("Error in saveFormDataAndInitiatePaystack:", error);
    return { error, status: 500 };
  }
};

export const paymentSuccessful = async (reference: string) => {
  const prisma = new PrismaClient();

  try {
    // Fetch existing transaction from the database
    const existingTransaction = await prisma.oneTimeUserProperty.findUnique({
      where: { reference },
    });

    // If transaction does not exist, return an error
    if (!existingTransaction) {
      console.error("Transaction not found:", reference);
      return { success: false, message: "Transaction not found." };
    }

    // If payment is already marked as successful, avoid duplicate updates
    if (existingTransaction.paymentStatus === "Successful") {
      console.log("Transaction already marked as successful:", reference);
      return {
        success: true,
        message: "Payment has already been recorded.",
        data: existingTransaction,
      };
    }

    // Verify the transaction with Paystack
    const verificationResponse = await verifyPaystackTransaction(reference);

    // Check if the transaction was actually successful
    if (!verificationResponse || !verificationResponse.status) {
      console.error("Transaction verification failed:", verificationResponse);
      return {
        success: false,
        message: "Transaction verification failed or was unsuccessful.",
        error: verificationResponse,
      };
    }

    // Update the transaction status in the database
    const updatedTransaction = await prisma.oneTimeUserProperty.update({
      where: { reference },
      data: {
        status: "Completed",
        paymentStatus: "Successful",
        statusMessage: "Payment completed successfully",
        error: null,
      },
    });

    console.log("Payment marked as successful:", updatedTransaction);
    return {
      success: true,
      message: "Payment recorded successfully",
      data: updatedTransaction,
    };
  } catch (error) {
    console.error("Error processing payment:", error);
    return { success: false, message: "Failed to process payment", error };
  } finally {
    await prisma.$disconnect();
  }
};
