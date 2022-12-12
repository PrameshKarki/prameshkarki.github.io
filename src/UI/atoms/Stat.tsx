import { useEffect, useState } from "react";
import { Statistic } from "../../data/statistics";

interface IProps {
  statistic: Statistic;
}

const Stat = (props: IProps) => {
  const { statistic } = props;
  const number = statistic.value.match(/\d+/g);

  const [statValue, setStatValue] = useState(number ? +number[0] : 0);
  let [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (value < statValue) {
          if (statValue > 1000) {
            value += 1000;
          } else if (statValue > 100) {
            value += 100;
          } else {
            value++;
          }
          setValue(value);
        } else {
          clearInterval(interval);
        }
      },
      statValue < 10 ? 1000 : statValue < 100 ? 500 : 100
    );
  }, []);

  return (
    <div className="stat tw-flex tw-flex-col tw-justify-center tw-items-center tw-inline-flex">
      <p>
        {value.toLocaleString()}
        {statistic.value.includes("+") ? "+" : ""}
      </p>
      <p>{statistic.name}</p>
    </div>
  );
};

export default Stat;
