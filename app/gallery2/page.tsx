import Navbar from "@/components/Navbar";
import { SignUpforOurSurvey } from "@/components/HomeComponents";
import Footer from "@/components/Footer";
import EffortlessTracking from "../login/EffortlessTracking";
import TakeAViewofOurGallery from "./TakeAViewofOurGallery";

export default function Home() {
  return (
    <section className="bg-teal-5000">
      <Navbar />

      <TakeAViewofOurGallery />
      {/* Sign Up for Our Survey Data Management */}
      <EffortlessTracking />

      {/* Footer Section */}
      <Footer />
    </section>
  );
}
