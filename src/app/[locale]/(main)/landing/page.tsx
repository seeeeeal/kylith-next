import Hero from "./components/Hero";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Products />
      <Reviews />
      <Features />
      <Newsletter />
    </div>
  );
}
