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
      <Features
        title={
          <span>
            With OROX, there’s no guesswork.
            <br />
            Just smart, data-driven investing
          </span>
        }
        description="Skip the FOMO and stress with AI-powered strategies built by industry-leading experts."
        cta="Create an account"
        path="/signup"
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
