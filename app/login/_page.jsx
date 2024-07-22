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

      {/* Efficient GIS Solutions */}
      <EfficientGISSolutions />

      {/* Revolutionizing industry Based Geospatial Solutions */}
      <Revolutionizing />

      {/* Sign Up for Our Survey Data Management */}
      <SignUpforOurSurvey />

      {/* What Our Beloved Clients Are Saying */}
      <BelovedClientsSayings />
      {/* Featured News */}

      {/* Take A View of Our Gallery */}
      <FeaturedNews />
      <OurGallery />
      <FrequentlyAskedQuestions />
      <ReachOutToUs />

      {/* Frequently Asked Questions */}

      {/* You Can Reach Out To Us! */}

      {/* Footer Section */}
      <Footer />
    </section>
  );
}
