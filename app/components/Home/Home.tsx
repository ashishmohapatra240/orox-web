import { Hero } from "../Hero/Hero";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Partners } from "../Partners/Partners";
import { Features } from "../Features/Features";
import { Steps } from "../Steps/Steps";
import { HomeProducts } from "../Products/HomeProducts";
import { Blog } from "../Blog/Blog";
import { FAQ } from "../FAQ/FAQ";
import Service from "../Service/Service";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Steps />
      <HomeProducts />
      <Blog />
      <FAQ />
      <Service />
      <Footer />
    </>
  );
}
