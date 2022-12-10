import Heading from "../atoms/Heading";

const DevCard = () => {
  return (
    <section className="tw-mt-10">
      <Heading text="Dev Card" />
      <div className="tw-flex tw-justify-center tw-mt-10">
        <a href="https://app.daily.dev/PrameshKarki">
          <img
            className="dev-card"
            src="https://api.daily.dev/devcards/9465c6fca03b4ba7bc4d18d42db771aa.png?r=5n2"
            alt="Pramesh Karki's Dev Card"
          />
        </a>
      </div>
    </section>
  );
};

export default DevCard;
