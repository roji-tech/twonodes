import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import {
  EfficientGISSolutions,
  SignUpforOurSurvey,
  Revolutionizing,
  BelovedClientsSayings,
  FeaturedNews,
  OurGallery,
} from "@/components/HomeComponents";
import { FrequentlyAskedQuestions } from "@/components/FrequentlyAskedQuestions";
import { ReachOutToUs } from "@/components/ReachOutToUs";
import Footer from "@/components/Footer";
import { SurveyTrustFirms } from "@/components/SurveyTrustFirms";

export default function Home() {
  return (
    <section className="bg-teal-5000">
      <Navbar />
      <Banner />

      {/* Survey Firms that Trust our Solution */}
      <SurveyTrustFirms />

      {/* Efficient GIS Solutions */}
      <EfficientGISSolutions />

      {/* Revolutionizing industry Based Geospatial Solutions */}
      <Revolutionizing />

      {/* Sign Up for Our Survey Data Management */}
      <SignUpforOurSurvey />

      {/* What Our Beloved Clients Are Saying */}
      <BelovedClientsSayings />

      {/* Featured News */}
      <FeaturedNews />

      {/* Take A View of Our Gallery */}
      <OurGallery />

      {/* Frequently Asked Questions */}
      <FrequentlyAskedQuestions />

      {/* You Can Reach Out To Us! */}
      <ReachOutToUs />

      {/* Footer Section */}
      <Footer />
    </section>
  );
}
