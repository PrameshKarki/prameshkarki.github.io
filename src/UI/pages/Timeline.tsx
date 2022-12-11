import Heading from "../atoms/Heading";

import MTimeline from "../molecules/Timeline";

const Timeline = () => {
  return (
    <section className="timeline-page">
      <Heading text="Timeline" />
      <div>
        <MTimeline />
      </div>
    </section>
  );
};

export default Timeline;
