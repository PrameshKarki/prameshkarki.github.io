import { Icon } from "@iconify/react";

interface IProps {
  heading: string;
  subheading: string;
  icon: string;
  animationClass: string;
}

const ThingsILoveCard = (props: IProps) => {
  const { heading, subheading, icon, animationClass } = props;
  return (
    <div
      className="wrapper"
      data-aos={animationClass}
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="icon-container">
        <Icon icon={icon} className="iconify tw-inline" inline={true} />
      </div>
      <h3>{heading}</h3>
      <p>{subheading}</p>
    </div>
  );
};

export default ThingsILoveCard;
