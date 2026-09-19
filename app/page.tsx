import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Loader } from "@/components/layout/loader";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { Plans } from "@/components/sections/plans";
import { BusinessTypes } from "@/components/sections/business-types";
import { Trust } from "@/components/sections/trust";
import { Process } from "@/components/sections/process";
import { Requirements } from "@/components/sections/requirements";
import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Solutions />
        <Plans />
        <BusinessTypes />
        <Trust />
        <Process />
        <Requirements />
        <About />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
