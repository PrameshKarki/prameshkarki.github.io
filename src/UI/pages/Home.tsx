import CV from "../../assets/documents/CV.pdf";
import Images from "../../data/images";
import Logo from "../atoms/Logo";
import Statistics from "../molecules/Statistics";
import ThemeToggle from "../molecules/ThemeToggle";

const Home = () => {
  return (
    <>
      <section className="landing-page">
        <Logo />
        <div className="hero-div">
          <div className="info">
            <p>
              Hi
              <img className="wave tw-inline" src={Images.Wave} alt="Wave" />
              ,I am
            </p>
            <p className="name">Pramesh Karki</p>
            <p>Software Engineer</p>
            <p>&lt;/&gt;</p>
            {/* <button
              className="btn download-btn"
              onClick={() => {
                window.open(CV);
              }}
            >
              Download CV
            </button> */}
          </div>
        </div>
        <div className="dev-container">
          <p>DEV</p>
        </div>
        <div className="bottom-container">
          <div className="social-links">
            <ul>
              <li>
                <a target="_blank" href="mailto:prameshkarki0407@gmail.com">
                  prameshkarki0407@gmail.com
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/PrameshKarki">
                  github/PrameshKarki
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ThemeToggle />
      </section>
      <Statistics />
    </>
  );
};

export default Home;
