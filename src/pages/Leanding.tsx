import { Navbar } from "../components/navbar/Navbar";
import { About } from "../components/home/About";
import { Stories } from "../components/home/Stories";
import { Footer } from "../components/footer/Footer";
import { ProblemSolution } from "../components/home/ProblemSolution";

function Leanding() {
  return (
    <div>
      <Navbar />
      <ProblemSolution />
      {/* <About /> */}
      {/* <Stories />
      <Footer /> */}
    </div>
  );
}

export default Leanding;
