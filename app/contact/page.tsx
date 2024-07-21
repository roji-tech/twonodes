import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { SurveyTrustFirms } from "@/components/HomeComponents";

const page = () => {
  return (
    <main className="">
      <Navbar />
      <Banner />

      {/* Trending Campaign Section */}
      <SurveyTrustFirms />

      {/* CTA Section */}

      {/* CAtegories Section */}

      {/* Footer Section */}
    </main>
  );
};

export default page;
