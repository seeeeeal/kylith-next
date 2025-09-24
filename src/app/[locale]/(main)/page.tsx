import Hero from "./landing/components/Hero";
import Products from "./landing/components/Products";
import Reviews from "./landing/components/Reviews";
import Features from "./landing/components/Features";
import Newsletter from "./landing/components/Newsletter";

// actual landing page
// components are in the landing/components folder
export default function Page() {
  return (
    <>
      <Hero />
      <Products />
      <Reviews />
      <Features />
      <Newsletter />
    </>
  );
}
