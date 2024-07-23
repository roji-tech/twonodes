import Navbar from "@/components/Navbar";
import { SignUpforOurSurvey } from "@/components/HomeComponents";
import Footer from "@/components/Footer";
import SurfBoard from "../services/SurfBoard";

export default function Home() {
  return (
    <section className="bg-teal-5000">
      <Navbar />
      

      {/* Footer Section */}
      <Footer />
    </section>
  );
}
