import Heading from "../atoms/Heading";

const Contact = () => {
  return (
    <section className="wanna-talk-page">
      <Heading text="Wanna talk?" />
      <div className="container">
        <div className="content">
          <p>Do you love development as much as i do?</p>
          <p>Have a cool project in mind, and think i can help you with it?</p>
          <p>
            Feel free to ping me. My inbox is always open whether its for a
            potential client, a recruiter or to simply drop for a chat.
          </p>
          <p>I shall get back to you as early as possible.</p>
          <button className="btn">
            <a href="mailto:prameshkarki0407@gmail.com">Get In Touch</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
