import About from "./components/About";
import Cta from "./components/Cta";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Notice from "./components/Notice";
import Plans from "./components/Plans";
import PriceCard from "./components/PriceCard";
import Product from "./components/Product";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <main className="">
      <Notice />
      <NavBar />
      <Hero />
      <Product />
      <About />
      <Cta />
      <FeatureSection />
      <PriceCard />
      <Plans />
      <Testimonials />
      <Footer />
    </main>  
  );
}
