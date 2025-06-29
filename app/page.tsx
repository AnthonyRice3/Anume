import About from "./components/About";
import Cta from "./components/Cta";
import FeatureSection from "./components/FeatureSection";
import Hero from "./components/Hero";
import Notice from "./components/Notice";
import Plans from "./components/Plans";
import Product from "./components/Product";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <main className="">
      <Notice />
      <Hero />
      <Product />
      <About />
      <Cta />
      <FeatureSection />
      <Plans />
      <Testimonials />
    </main>  
  );
}
