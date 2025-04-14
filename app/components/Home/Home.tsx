import { Hero } from "../Hero/Hero";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Features } from "../Features/Features";
import { Steps } from "../Steps/Steps";
import { HomeProducts } from "../Products/HomeProducts";
import { FAQ } from "../FAQ/FAQ";
import Service from "../Service/Service";
import { HomeBlog } from "../Blog/HomeBlog";
import { PartnersMarquee } from "../Partners/PartnersMarquee";
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <PartnersMarquee />
      {/* <Partners /> */}
      <Features
        title={"With OROX there’s no guesswork, just gains"}
        description={
          "Skip the FOMO and stress—AI-powered quantitative investing with expert strategies from top minds in the industry."
        }
        cta="Create an account"
      />
      <Steps />
      <HomeProducts />
      <HomeBlog />
      <FAQ />
      <Service
        tag="READY TO INVEST SMARTER?"
        description="Join OROX and access AI-powered, risk-aware strategies—built to cut through the noise and focus on long-term performance."
      />
      <Footer />
    </>
  );
}
