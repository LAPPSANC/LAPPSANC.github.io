import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Loader } from "@/components/layout/loader";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Benefits } from "@/components/sections/benefits";
import { Services } from "@/components/sections/services";
import { BusinessTypes } from "@/components/sections/business-types";
import { Projects } from "@/components/sections/projects";
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
        <Benefits />
        <Services />
        <BusinessTypes />
        <Projects />
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
