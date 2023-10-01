import About from "./pages/About";
import Home from "./pages/Home";
import SkillSets from "./pages/SkillSets";
import ThingsILove from "./pages/ThingsILove";

import Footer from "./molecules/Footer";
import Contact from "./pages/Contact";
import DevCard from "./pages/DevCard";
import MiniProjects from "./pages/MiniProjects";
import Projects from "./pages/Projects";
import Timeline from "./pages/Timeline";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Timeline />
      <ThingsILove />
      <SkillSets />
      {/* <Analytics /> */}
      {/* <Projects /> */}
      {/* <MiniProjects /> */}
      <DevCard />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
