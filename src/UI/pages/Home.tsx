import Images from "../../data/images";
import Logo from "../atoms/Logo";

const Home = () => {
  return (
    <section className="landing-page">
      <Logo />
      <div className="hero-div">
        <div className="info">
          <p data-aos="zoom-in">
            Hi
            <img className="wave" src={Images.Wave} alt="Wave" />
            ,I am
          </p>
          <p data-aos="zoom-in" className="name">
            Pramesh Karki
          </p>
          <p data-aos="zoom-in">Software Developer</p>
          <p data-aos="zoom-in">&lt;/&gt;</p>
        </div>
      </div>
      <div className="dev-container" data-aos="zoom-in">
        <p>DEV</p>
      </div>
      <div className="bottom-container">
        <div className="social-links">
          <ul>
            <li>
              <a target="_blank" href="mailto:prameshkarki0407@gmail.com">
                Prameshkarki0407@gmail.com
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
    </section>
  );
};

export default Home;
