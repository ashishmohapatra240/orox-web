import { Blog } from "../components/Blog/Blog";
import { FAQ } from "../components/FAQ/FAQ";
import { Features } from "../components/Features/Features";
import { Hero } from "../components/Hero/Hero";
import { Partners } from "../components/Partners/Partners";
import { Products } from "../components/Products/Products";
import Service from "../components/Service/Service";
import { Steps } from "../components/Steps/Steps";

export default function Webpages() {
  return (
    <main>
      <Hero />
      <Partners />
      <Features />
      <Steps />
      <Products />
      <Blog />
      <FAQ />
      <Service />
    </main>
  );
}
