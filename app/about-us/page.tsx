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

export default function Home() {
  return (
    <section className="bg-teal-5000">
      <Navbar />
      <Banner />

      {/* Survey Firms that Trust our Solution */}
      <SurveyTrustFirms />

      {/* Sign Up for Our Survey Data Management */}
      <SignUpforOurSurvey />

      {/* What Our Beloved Clients Are Saying */}
      <BelovedClientsSayings />
      {/* Featured News */}

      {/* Frequently Asked Questions */}
      <FrequentlyAskedQuestions />

      {/* You Can Reach Out To Us! */}
      <ReachOutToUs />

      {/* Footer Section */}
      <Footer />
    </section>
  );
}
