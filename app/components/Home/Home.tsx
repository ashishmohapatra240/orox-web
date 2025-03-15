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
      <Features
        title={"With OROX there’s no guesswork, just gains"}
        description={
          "Skip the FOMO and stress—AI-powered quantitative investing with expert strategies from top minds in the industry."
        }
        cta="Create an account"
      />
      <Steps />
      <HomeProducts />
      <Blog />
      <FAQ />
      <Service />
      <Footer />
    </>
  );
}
