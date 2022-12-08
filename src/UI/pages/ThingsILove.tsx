import thinsILove, {
  ThingsILove as ThingsILoveType,
} from "../../data/thingsILove";
import Heading from "../atoms/Heading";
import ThingsILoveCard from "../molecules/ThingsILoveCard";

const animations = ["fade-right", "zoom-in-down", "fade-left"];

const ThingsILove = () => {
  return (
    <section className="things-i-love-page">
      <Heading text="Things I Love" />
      <div className="container">
        {thinsILove.map((item: ThingsILoveType, index: number) => {
          return (
            <ThingsILoveCard
              key={index}
              animationClass={animations[index]}
              heading={item.heading}
              subheading={item.subHeading}
              icon={item.icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ThingsILove;
