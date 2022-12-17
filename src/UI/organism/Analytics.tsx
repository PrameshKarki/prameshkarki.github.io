import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import useAnalytics from "../../hooks/useAnalytics";
import useWindowDimension from "../../hooks/useWindowDimension";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IProps {
  setShow: (show: boolean) => void;
}

const Analytics = (props: IProps) => {
  const { setShow } = props;
  const { languageAnalytics } = useAnalytics();

  const { width } = useWindowDimension();

  if (languageAnalytics.length === 0) setShow(false);
  else setShow(true);

  const data = {
    labels: languageAnalytics.map((language) => language.name),
    datasets: [
      {
        responsive: true,
        label: "Percentage of total used",
        data: languageAnalytics.map((language) => language.percent),
        backgroundColor: languageAnalytics.map((language) => language.color),
        borderColor: languageAnalytics.map((language) => language.color),
        borderWidth: 2,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
  };

  if (languageAnalytics.length === 0) return null;

  return (
    <div className="tw-flex tw-justify-center">
      <div className="pie-wrapper">
        <Pie
          data={data}
          options={{
            plugins: {
              legend: {
                display: width < 500 ? false : true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Analytics;
