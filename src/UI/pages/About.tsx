import images from "../../data/images";
import Heading from "../atoms/Heading";
import CodeEditor from "../molecules/CodeEditor";

const About = () => {
  return (
    <section className="about">
      <Heading text={"About Me"} />
      <div className="content-wrapper">
        <div
          className="about-me"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <p>
            Hello World!, I'm <span>Pramesh Karki</span>, a passionate Software
            developer from country of himalayas Nepal
            <span className="flag">
              <img src={images.Flag} alt="National flag of Nepal" />
            </span>
            .I am currently pursuing <span>Computer Engineering</span> at Nepal
            College of Information Technology Balkumari, Lalitpur.I tend to make
            use of modern web technologies to build websites that looks great,
            feels fantastic and functions correctly.{" "}
          </p>
          <p>
            My goal is to build products that provide pixel perfect,performant
            experiences.
          </p>
        </div>
        <div
          className="my-picture"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={images.OwnImage} alt="img" />
        </div>
      </div>
      <p className="quote-text" data-aos="zoom-in-down">
        “An ordinary individual with desire of doing something extra ordinary.”
      </p>
      <div className="tw-mt-4 tw-flex tw-justify-center">
        <CodeEditor
          animation
          activeFile={{
            name: "About.tsx",
            language: "ts",
          }}
          files={[
            {
              name: "About.tsx",
              language: "ts",
            },
            {
              name: "About.css",
              language: "css",
            },
          ]}
          language="ts"
          code={`class Person{
    name:string;
    age:number;
    constructor(){
        this.name="Pramesh Karki";
        this.age=new Date().getFullYear()-2001;
    }
}`}
        />
      </div>
    </section>
  );
};

export default About;
