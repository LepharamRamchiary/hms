import { About } from "../components/home/About";
import { ProblemSolution } from "../components/home/ProblemSolution";
import { Features } from "../components/home/Features";
import { Testimonials } from "../components/home/Testimonials";
import { CTA } from "../components/home/CTA";
import { Hero } from "../components/home/Hero";

function Leanding() {
  return (
    <div>
      <Hero />
      <ProblemSolution />
      <About />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default Leanding;