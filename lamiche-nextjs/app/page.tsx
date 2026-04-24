import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Specials from "./components/Specials";
import Regional from "./components/Regional";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/Subscribe";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import Toast from "./components/Toast";
import AIAssistant from "./components/AIAssistant";

export default function Home() {
  return (
    <>
      {/* Fixed elements */}
      <Navbar />
      <CartSidebar />
      <Toast />
      <AIAssistant />

      {/* Page sections */}
      <main>
        <Hero />
        <Ticker />
        <About />
        <Catalog />
        <Specials />
        <Regional />
        <Process />
        <Testimonials />
        <Gallery />
        <Subscribe />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
