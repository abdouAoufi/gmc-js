import "./counter.css";
import React from "react";
import database from "./images";

const Gallery = () => {
  const [index, setIndex] = React.useState(0); // []

  const next = () => {
    if (index === database.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const previous = () => {
    if (index === 0) {
      return setIndex(0)
    }
    setIndex(index - 1);
  };

  return (
    <div>
      <img height='600px' width='600px' src={database[index]} />
      <div>
        <button onClick={previous}>previous</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  );
};

export default Gallery;
