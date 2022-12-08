import miniProjects from "../../data/miniProjects";
import { Project } from "../../data/projects";
import Heading from "../atoms/Heading";
import MiniProject from "../molecules/MiniProject";

const MiniProjects = () => {
  return (
    <section className="mini-project-page">
      <Heading text="Mini Projects" />
      <div className="container">
        <div className="projects-container">
          {miniProjects.map((project: Project, index: number) => {
            return <MiniProject project={project} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MiniProjects;
