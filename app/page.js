import Image from "next/image";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Technologies from "./sections/Technologies";
import Testimonials from "./sections/Testimonials";



export default function Home() {
  return (
    <>
     <Hero/>
     <About/>
     <Testimonials/>
     <Technologies/>
     <FAQ/>
     <Footer/>
     </>
   
  );
}
