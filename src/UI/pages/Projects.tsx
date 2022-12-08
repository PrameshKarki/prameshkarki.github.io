import projects, { Project as ProjectType } from "../../data/projects";
import isEvenNumber from "../../utils/isEvenNumber";
import Heading from "../atoms/Heading";
import Project from "../molecules/Project";

const Projects = () => {
  return (
    <section className="projects-page">
      <Heading text="Projects" />
      <p className="desc">
        These are the projects that i have worked on in the past or the ones
        that i am currently working on.Feel free to reach me out if you have any
        questions regarding any of these.{" "}
      </p>
      <div className="projects-container">
        {projects.map((project: ProjectType, index: number) => {
          return (
            <Project
              key={index}
              project={project}
              animationClass={isEvenNumber(index) ? `fade-right` : `fade-left`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
