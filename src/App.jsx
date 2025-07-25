import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Highlights from "./Components/Highlights";
import Model from "./Components/Model";
import * as Sentry from "@sentry/react";
import Features from "./Components/Features";
import HowItWorks from "./Components/HowItWorks";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
