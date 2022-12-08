import { Icon } from "@iconify/react";
import images from "../../data/images";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <b>Thanks for scrolling</b>.That’s all folks.
      </p>
      <div className="social-links">
        <div id="twitter" title="Twitter">
          <a
            target="_blank"
            href="https://twitter.com/PrameshKarki07"
            aria-label="Twitter"
          >
            <Icon
              icon={"akar-icons:twitter-fill"}
              className="iconify"
              inline={true}
            />
          </a>
        </div>
        <div id="github" title="Github">
          <a
            target="_blank"
            href="https://github.com/PrameshKarki"
            aria-label="Github"
          >
            <Icon
              icon={"akar-icons:github-fill"}
              className="iconify"
              inline={true}
            />

            <span className="iconify" data-inline="false" data-icon=""></span>
          </a>
        </div>
        <div id="linkedin" title="LinkedIn">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/pramesh-karki-7462a21b4"
            aria-label="LinkedIn"
          >
            <Icon
              icon={"akar-icons:linkedin-fill"}
              className="iconify"
              inline={true}
            />
          </a>
        </div>
        <div id="gmail" title="Gmail">
          <a
            target="_blank"
            href="mailto:prameshkarki0407@gmail.com"
            aria-label="Gmail"
          >
            <Icon
              icon={"logos:google-gmail"}
              className="iconify"
              inline={true}
            />
          </a>
        </div>
        <div id="facebook" title="Facebook">
          <a
            target="_blank"
            href="https://www.facebook.com/PrameshKarki17/"
            aria-label="Facebook"
          >
            <Icon
              icon={"akar-icons:facebook-fill"}
              className="iconify"
              inline={true}
            />
          </a>
        </div>
      </div>
      <div className="bottom-footer">
        <p>
          <small>All copyrights reserved© </small>
          <span id="current-year">2021</span>
          <span id="name">&lt;Pramesh/&gt;</span>
        </p>
        <div className="flag-container">
          <img src={images.Flag} alt="National flag of Nepal" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
