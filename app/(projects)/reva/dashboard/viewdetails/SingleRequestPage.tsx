"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { PropertyWithoutUser } from "../../actions/dbActions";

export type ReportType = {
  centroid: string | null; // e.g. "6.5244, 3.3792"

  titleStatus: string; // "is a duly registered instrument" | "is not a duly registered instrument"
  titleDate: string | null; // e.g. "2022-08-15"
  titleName: string | null; // e.g. "Mr John Doe"
  titleNumber: string; // e.g. "Number 33 Page 33 in Volume 2580"

  rightToSellHolder: string; // e.g. "Mr Reva"

  transactionFlow: string; // List all transaction flow details

  parcelPositionMatch: string; // e.g. "99.99%"
  parcelStatus: string; // e.g. "Free from any known Government Acquisition"
  implicationOfParcelStatus: string | null; // e.g. "No government claim risk"

  commitmentStatus: string | null; // e.g. "Committed"
  implicationOfCommitmentStatus: string | null; // e.g. "May require government consent"

  setbacksInfo: string; // e.g. "Falls partly within the offset of the Open Canal"
  implicationOfsetbacksInfo: string | null; // e.g. "Possible construction limitation"

  surveyPlanNumber: string; // e.g. "LS/D/LA/2580"
  surveyName: string; // e.g. "LEGRANDE PROPERTY DEVELOPMENT COMPANY LTD"
  dateOnSurveyPlan: string | null; // e.g. "2020-11-22"

  historicalSurveys: string; // e.g. "Survey by XYZ in 2010, updated in 2016"
  zoning: string; // e.g. "Residential"

  hasBuildingPlanApproval: boolean; // true = Yes, false = No
  buildingPlanNo: string; // e.g. "BP/LA/2025/0001"

  images: {
    transactionFlowImg: string; // Transaction Flow of Property Parcel
    parcelCheck: string; // Parcel Check
    parcelChartingFree: string; // Parcel Charting (Free from Government Acquisition)
    parcelChartingOffset: string; // Parcel Charting (Falls within setback)
    landUseCheck: string; // Parcel Land Use Check
  };
};

const SingleRequestPage = ({
  property,
}: {
  property: PropertyWithoutUser | any;
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const toggleDeleteModal = () => {
    setOpenDeleteModal((prev) => !prev);
  };

  const isReportReady = () => {
    const report = property?.report;

    const isApproved =
      typeof report === "object" &&
      report !== null &&
      "isApproved" in report &&
      (report as any).isApproved === true;

    if (!isApproved) return false;

    if ("directFileLink" in (report || {})) {
      return true;
    }

    const requiredKeys: (keyof ReportType)[] = [
      "titleName",
      "titleDate",
      "titleStatus",
      "titleNumber",
      "rightToSellHolder",
      "transactionFlow",
      "parcelPositionMatch",
      "parcelStatus",
      "surveyPlanNumber",
      "surveyName",
      "historicalSurveys",
      "zoning",
      "setbacksInfo",
      "images",
      ...(report?.hasBuildingPlanApproval
        ? ["buildingPlanNo" as keyof ReportType]
        : []),
    ];

    const hasAllFields =
      typeof report === "object" &&
      report !== null &&
      requiredKeys.every((key) => key in report);

    return hasAllFields;
  };

  const handleDownloadReport = () => {
    console.log("Direct file link:", property.report);
    if (
      property?.report &&
      typeof property.report === "object" &&
      "directFileLink" in property.report
    ) {
      const link = document.createElement("a");
      if (
        typeof property.report === "object" &&
        property.report !== null &&
        "directFileLink" in property.report
      ) {
        link.href = (
          property.report as { directFileLink: string }
        ).directFileLink;
      } else {
        console.error("No valid file link available to download");
      }
      link.download = `${property?.title ?? "report"}.pdf`; // You can customize the file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error("No file link available to download");
    }
  };

  return (
    <>
      <div className="space-y-8 p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              {property?.title || "Untitled Request"}
            </h1>
            <p className="text-sm text-muted-foreground">
              REF: {property?.reference}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {property?.status && <Badge>{property.status}</Badge>}
            {property?.paymentStatus && (
              <Badge variant="secondary">{property.paymentStatus}</Badge>
            )}
            {isReportReady() && (
              <Badge className="w-full md:w-auto px-6 text-white bg-green-500">
                {"Approved"}
              </Badge>
            )}

            <Button
              variant="outline"
              disabled={!isReportReady()}
              className="max-sm:w-full rounded-lg"
              onClick={handleDownloadReport}
            >
              Download Report
            </Button>
          </div>
        </div>

        {/* Property Information */}
        <Card>
          <CardHeader>
            <CardTitle>Property Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Info label="Address" value={property?.address} />
            <Info label="LGA" value={property?.lga} />
            <Info label="Parcel ID" value={property?.parcelId || "-"} />
            <Info
              label="Created"
              value={
                property?.createdAt
                  ? new Date(property.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "-"
              }
            />
            <Info
              label="Last Updated"
              value={
                property?.updatedAt
                  ? new Date(property.updatedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "-"
              }
            />
          </CardContent>
        </Card>

        {/* Financial */}
        <Card>
          <CardHeader>
            <CardTitle>Financial</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Info
              label="Total Cost"
              value={`₦${property?.totalCost?.toLocaleString()}`}
              bold
            />
            <Info
              label="Payment Status"
              value={property?.paymentStatus || "-"}
              color={
                property?.paymentStatus === "Paid"
                  ? "text-green-600"
                  : "text-red-600"
              }
            />
            {property?.paymentLink && (
              <div className="col-span-2">
                <Button variant="link" size="sm" asChild>
                  <a
                    href={property.paymentLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Payment
                  </a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Supporting Documents */}
        {/* <Card>
          <CardHeader>
            <CardTitle>Supporting Documents</CardTitle>
          </CardHeader>
          <CardContent>
            {Array.isArray(property?.documentsUrls) &&
            property.documentsUrls.length > 0 ? (
              <ul className="list-disc pl-6 space-y-1">
                {property.documentsUrls.map((url, idx) => (
                  <li key={idx}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Document {idx + 1}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <svg
                  className="mx-auto h-8 w-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <p className="mt-2 text-sm text-muted-foreground">
                  No documents uploaded
                </p>
                <Button className="mt-4">Upload Document</Button>
              </div>
            )}
          </CardContent>
        </Card> */}

        {/* Comments */}
        <Card>
          <CardHeader>
            <CardTitle>Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={property?.comments || "No remarks"}
              readOnly
              rows={4}
            />
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-between items-center border-t pt-6 flex-wrap max-sm:justify-center gap-4">
          <Button variant="outline" className="max-sm:w-full rounded-lg">
            Back to All Requests
          </Button>

          <div className="flex gap-4">
            <Button
              variant="destructive"
              className="max-sm:w-full rounded-lg"
              onClick={toggleDeleteModal}
              disabled
            >
              Delete Request
            </Button>
            <Button disabled className="max-sm:w-full rounded-lg">
              Download Receipt
            </Button>
          </div>
        </div>
      </div>

      <AlertDialog open={openDeleteModal} onOpenChange={setOpenDeleteModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Deleting this Request</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this due diligence request? This
              action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={toggleDeleteModal}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={toggleDeleteModal}>
              Delete Request
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const Info = ({
  label,
  value,
  bold,
  color,
}: {
  label: string;
  value: string;
  bold?: boolean;
  color?: string;
}) => (
  <div>
    <p className="text-xs text-muted-foreground">{label}</p>
    <p
      className={`text-sm ${bold ? "font-semibold" : ""} ${
        color || "text-gray-800"
      }`}
    >
      {value}
    </p>
  </div>
);

export default SingleRequestPage;
function notifyError(arg0: string) {
  throw new Error("Function not implemented.");
}
