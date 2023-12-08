import { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// import reviews from "../data";

const Testimonials = (props) => {
  const [index, setIndex] = useState(0);
  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(props.reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= props.reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    const newIndex = Math.floor(Math.random() * 4);
    setIndex((prevIndex) => {
      prevIndex = newIndex;
      return prevIndex;
    });
  }
  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-100 hover:shadow-md">
      <Card review={props.reviews[index]}></Card>

      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={leftShiftHandler}
        >
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={rightShiftHandler}
        >
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
      <div className="mt-5">
        <button
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg "
          onClick={surpriseHandler}
        >
          surprise me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
