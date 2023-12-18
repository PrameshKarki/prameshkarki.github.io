import About from "./pages/About";
import Home from "./pages/Home";
import SkillSets from "./pages/SkillSets";
import ThingsILove from "./pages/ThingsILove";

import Footer from "./molecules/Footer";
import Contact from "./pages/Contact";
import DevCard from "./pages/DevCard";
import Timeline from "./pages/Timeline";
import GlowishCard from "./molecules/GlowishCard";

const App = () => {
  return (
    <>
      <Home />
      <About />
      {/* <GlowishCard /> */}
      <Timeline />
      <ThingsILove />
      <SkillSets />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
