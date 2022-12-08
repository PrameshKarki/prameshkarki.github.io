import { Icon } from "@iconify/react";
import { Project } from "../../data/projects";

interface IProps {
  project: Project;
}
const MiniProject = (props: IProps) => {
  const { project } = props;
  return (
    <div className="project-item">
      <h3 className="title">{project.title}</h3>
      <p>{project.description}</p>
      <div className="wrapper">
        <div className="buttons-container">
          {project.githubLink && (
            <button className="check-repo" aria-label="Github Link">
              <a
                rel="noopener"
                target="_blank"
                aria-label="Github Link"
                href={project.githubLink}
              >
                Check Repository
              </a>
            </button>
          )}
        </div>
        <div className="made-from">
          {project.technologiesUsed.map((tech: string, index: number) => {
            return (
              <div title={tech} className="technology-used" key={index}>
                <Icon
                  icon={project.technologiesIcons[index]}
                  className="iconify"
                  inline={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MiniProject;
