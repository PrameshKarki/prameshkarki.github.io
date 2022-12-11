import { Icon } from "@iconify/react";

const Timeline = () => {
  return (
    <section className="timeline">
      <div className="wrapper">
        <div className="center-line">
          <a href="#" className="scroll-icon">
            <Icon icon={"bi:caret-up-fill"} className="icon" />
          </a>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon">
              <Icon icon={"material-symbols:home"} />
            </i>
            <div className="details">
              <span className="title">Title of Section 1</span>
              <span>1st Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon">
              <Icon icon={"game-icons:graduate-cap"} />
            </i>
            <div className="details">
              <span className="title">Title of Section 2</span>
              <span>2nd Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon">
              <Icon icon={"fa6-solid:user-graduate"} />
            </i>
            <div className="details">
              <span className="title">Title of Section 3</span>
              <span>3rd Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon">
              <Icon icon={"material-symbols:rocket-launch"} />
            </i>{" "}
            <div className="details">
              <span className="title">Title of Section 4</span>
              <span>4th Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon">
              <Icon icon={"ph:paper-plane-fill"} />
            </i>{" "}
            <div className="details">
              <span className="title">Title of Section 5</span>
              <span>5th Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon">
              <Icon icon={"mdi:map-marker"} />
            </i>
            <div className="details">
              <span className="title">Title of Section 6</span>
              <span>6th Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
