import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileCTABar } from "@/components/MobileCTABar";
import { PainPoint } from "@/components/PainPoint";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { StructuredData } from "@/components/StructuredData";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <>
      <StructuredData />
      <a
        href="#main"
        className="fixed -top-24 left-4 z-[100] rounded-lg bg-orange px-4 py-2.5 font-bold focus:top-4"
      >
        본문 바로가기
      </a>
      <Header />
      <main id="main">
        <Hero />
        <PainPoint />
        <Services />
        <Works />
        <Process />
        <Contact />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
