import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import NewsLetter from "@/components/NewsLetter";
import StudentSays from "@/components/StudentSays";
import Track2 from "@/components/Track2";
import Tracks from "@/components/Tracks";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full bg-white font-[Montserrat]">
      <LandingPage />
      <Tracks />
      <Experience />
      <StudentSays />
      <Track2 />
      <NewsLetter />
      <Footer />
    </main>
  );
}
