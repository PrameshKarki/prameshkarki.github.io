import { Icon } from "@iconify/react";
import { Skill as SkillType } from "../../data/skills";

interface IProps {
  skill: SkillType;
}

const Skill = (props: IProps) => {
  const { skill } = props;
  return (
    <div title={skill.name}>
      <Icon icon={skill.icon} className="iconify" inline={false} />
    </div>
  );
};

export default Skill;
