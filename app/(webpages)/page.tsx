import { Blog } from "../components/Blog/Blog";
import { FAQ } from "../components/FAQ/FAQ";
import { Features } from "../components/Features/Features";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { Partners } from "../components/Partners/Partners";
import { Products } from "../components/Products/Products";
import Service from "../components/Service/Service";
import { Steps } from "../components/Steps/Steps";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Steps />
      <Products />
      <Blog />
      <FAQ />
      <Service />
      <Footer />
    </>
  );
}
