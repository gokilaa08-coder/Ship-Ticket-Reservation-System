import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedShips from "../components/FeaturedShips";
import WhyChooseUs from "../components/WhyChooseUs";
import Destination from "../components/Destination";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedShips />
      <WhyChooseUs />
      <Destination />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;