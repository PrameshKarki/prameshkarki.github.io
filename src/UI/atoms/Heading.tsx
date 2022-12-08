interface IProps {
  text: string;
}

const Heading = (props: IProps) => {
  const { text } = props;
  return <h2 className="page-heading">{text}</h2>;
};

export default Heading;
