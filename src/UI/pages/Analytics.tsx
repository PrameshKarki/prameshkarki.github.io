import { useState } from "react";
import Heading from "../atoms/Heading";
import AnalyticsChart from "../organism/Analytics";
const Analytics = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <section className="analytics">
      {show && <Heading text="Languages used" />}
      <AnalyticsChart setShow={setShow} />
      {show && (
        <p className="note">
          <strong>Note:</strong>This is a metric of the languages my public code
          consists of and doesn't reflect experience or skill level.
        </p>
      )}
    </section>
  );
};

export default Analytics;
