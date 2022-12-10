import statistics from "../../data/statistics";
import Stat from "../atoms/Stat";

const Statistics = () => {
  return (
    <section className="tw-border-y tw-border-y-stone-300">
      <div className="stats-container tw-my-10 tw-py-10  tw-mx-auto ">
        <div className="stats tw-flex tw-justify-evenly tw-gap-12 ">
          {statistics.map((statistic, index: number) => (
            <Stat statistic={statistic} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
