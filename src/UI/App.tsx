import About from "./pages/About";
import Home from "./pages/Home";
import SkillSets from "./pages/SkillSets";
import ThingsILove from "./pages/ThingsILove";

import Footer from "./molecules/Footer";
import Contact from "./pages/Contact";
import MiniProjects from "./pages/MiniProjects";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <ThingsILove />
      <SkillSets />
      <Projects />
      <MiniProjects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
