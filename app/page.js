import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Services from "@/components/Service";
import Skills from "@/components/Skill";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Skills />
    <Project />
    <ContactUs />
    <Footer />
    </>
  );
}
