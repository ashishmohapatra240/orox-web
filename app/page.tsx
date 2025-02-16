import { Hero } from './components/Hero/Hero';
import { Partners } from './components/Partners/Partners';
import { Features } from './components/Features/Features';
import { Steps } from './components/Steps/Steps';
import { Products } from './components/Products/Products';
import { Blog } from './components/Blog/Blog';
import { FAQ } from './components/FAQ/FAQ';
import Service from './components/Service/Service';
export default function Home() {
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
