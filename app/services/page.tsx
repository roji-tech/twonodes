import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import {
  EfficientGISSolutions,
  SignUpforOurSurvey,
  Revolutionizing,
  SurveyTrustFirms,
  BelovedClientsSayings,
  FeaturedNews,
  OurGallery,
  FrequentlyAskedQuestions,
  ReachOutToUs,
} from "@/components/HomeComponents";
import Footer from "@/components/Footer";
import SurfBoard from "./SurfBoard";

export default function Home() {
  return (
    <section className="bg-teal-5000">
      <Navbar />
      <Revolutionizing />

      <SurfBoard />

      {/* Survey Firms that Trust our Solution */}
      <SurveyTrustFirms />

      {/* Sign Up for Our Survey Data Management */}
      <SignUpforOurSurvey />

      {/* What Our Beloved Clients Are Saying */}
      <BelovedClientsSayings />

      {/* Frequently Asked Questions */}
      <FrequentlyAskedQuestions />

      {/* You Can Reach Out To Us! */}
      <ReachOutToUs />

      {/* Footer Section */}
      <Footer />
    </section>
  );
}
