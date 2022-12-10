import { Icon } from "@iconify/react";
import { Project as ProjectType } from "../../data/projects";

interface IProps {
  project: ProjectType;
  animationClass: string;
}

const Project = (props: IProps) => {
  const { project, animationClass } = props;
  return (
    <div
      className="project-card"
      data-aos={animationClass}
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <header className="screenshot-container">
        <img src={project.image} alt="Screenshot of Project" />
      </header>
      <main>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </main>
      <footer className="card-footer">
        <div className="left-side">
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
          {project.liveLink && (
            <button className="live-link" aria-label="Live Link">
              <a
                target="_blank"
                rel="noopener"
                aria-label="Live Link"
                href={project.liveLink}
              >
                <Icon
                  icon={"ph:globe-hemisphere-east-thin"}
                  className="iconify"
                  inline={true}
                />
              </a>
            </button>
          )}
        </div>
        <div className="right-side">
          <div className="icons-container">
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
      </footer>
    </div>
  );
};

export default Project;
