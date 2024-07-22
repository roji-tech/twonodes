import Navbar from "@/components/Navbar";
import { SignUpforOurSurvey } from "@/components/HomeComponents";
import Footer from "@/components/Footer";
import SurfBoard from "../services/SurfBoard";

export default function Home() {
  return (
    <section className="bg-teal-5000">
      <Navbar />
      <SurfBoard />

      {/* Sign Up for Our Survey Data Management */}
      <SignUpforOurSurvey />

      {/* Footer Section */}
      <Footer />
    </section>
  );
}
