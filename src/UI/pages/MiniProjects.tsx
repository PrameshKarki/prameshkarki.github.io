import { Icon } from "@iconify/react";
import miniProjects from "../../data/miniProjects";
import { Project } from "../../data/projects";
import Heading from "../atoms/Heading";
import MiniProject from "../molecules/MiniProject";

const MiniProjects = () => {
  return (
    <section className="mini-project-page">
      <Heading text="Mini Projects" />
      <div className="container">
        <Icon
          icon={"material-symbols:chevron-left-rounded"}
          color="#fff"
          fontSize={30}
          className="tw-absolute tw-top-2/4 tw-animate-pulse "
        />
        <Icon
          icon={"material-symbols:chevron-right-rounded"}
          color="#fff"
          fontSize={30}
          className="tw-absolute tw-top-2/4 tw-right-2 tw-animate-pulse "
        />

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
