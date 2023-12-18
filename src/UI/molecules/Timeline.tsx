import { Icon } from "@iconify/react";
import timelines, { Timeline as TimelineModel } from "../../data/timeline";

const Timeline = () => {
  return (
    <section className="timeline">
      <div className="wrapper">
        <div className="center-line">
          <a href="#root-timeline" className="scroll-icon">
            <Icon icon={"bi:caret-up-fill"} className="icon" />
          </a>
        </div>
        <div>
          {timelines.map((timeline: TimelineModel, index: number) => {
            return (
              <div
                className={`row ${index % 2 === 0 ? "row-1" : "row-2"}`}
                key={index}
                id={index === 0 ? "root-timeline" : undefined}
              >
                <section
                  style={{
                    lineHeight: "1.6",
                  }}
                >
                  <i className="icon">
                    <Icon icon={timeline.icon} />
                  </i>
                  <div className="details">
                    <span className="title">{timeline.title}</span>
                    <span>{timeline.date}</span>
                  </div>
                  {timeline?.subTitle && (
                    <p className="tw-italic tw-text-xs tw-leading-9">
                      {timeline?.subTitle}
                    </p>
                  )}
                  <p>{timeline.description}</p>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
