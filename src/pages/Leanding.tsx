import { Navbar } from "../components/navbar/Navbar";
import { About } from "../components/home/About";
import { Stories } from "../components/home/Stories";
import { Footer } from "../components/footer/Footer";
import { ProblemSolution } from "../components/home/ProblemSolution";
import { Features } from "../components/home/Features";
import { Testimonials } from "../components/home/Testimonials";

function Leanding() {
  return (
    <div>
      <Navbar />
      <ProblemSolution />
      <About />
      <Features />
      <Testimonials />
      {/* <Stories />
      <Footer /> */}
    </div>
  );
}

export default Leanding;
