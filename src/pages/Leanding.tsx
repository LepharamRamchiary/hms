import { Navbar } from "../components/navbar/Navbar";
import { About } from "../components/home/About";
import { Footer } from "../components/footer/Footer";
import { ProblemSolution } from "../components/home/ProblemSolution";
import { Features } from "../components/home/Features";
import { Testimonials } from "../components/home/Testimonials";
import { CTA } from "../components/home/CTA";
import { Hero } from "../components/home/Hero";

function Leanding() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <About />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default Leanding;
