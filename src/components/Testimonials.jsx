import Card from "./Card";

const Testimonials = (props) => {
  return (
    <div>
      <Card review={props.reviews[0]}></Card>
    </div>
  );
};

export default Testimonials;
