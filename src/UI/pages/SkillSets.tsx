import skills from "../../data/skills";
import Heading from "../atoms/Heading";
import Skill from "../atoms/Skill";

const SkillSets = () => {
  return (
    <section className="skillsets-page">
      <Heading text="My SkillSets" />
      <div className="container">
        <div className="skills-icon-container">
          {skills.map((skill, index) => {
            return <Skill skill={skill} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSets;
