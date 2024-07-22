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
} from "@/components/HomeComponents";
import { ReachOutToUs } from "@/components/ReachOutToUs";
import Footer from "@/components/Footer";
import { ContactUs, OurMap } from "./Components";

export default function Home() {
  return (
    <section className="bg-teal-5000">
      <Navbar />
      <ContactUs />

      {/* You Can Reach Out To Us! */}
      <ReachOutToUs />
      {/* <OurMap /> */}

      {/* Footer Section */}
      <Footer />
    </section>
  );
}
