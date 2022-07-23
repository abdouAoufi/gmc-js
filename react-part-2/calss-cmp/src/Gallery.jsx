import "./counter.css";
import React from "react";
import database from "./images";

const Gallery = () => {
  const [index, setIndex] = React.useState(
    Math.round(Math.random() * (database.length - 1))
  ); // []
  const [imgSrc, setImgSrc] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setImgSrc(database[index]);
    }, 2000);
  }, []);

  const next = () => {
    if (index === database.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const previous = () => {
    if (index === 0) {
      return setIndex(0);
    }
    setIndex(index - 1);
  };

  return (
    <div>
      {imgSrc === null ? (
        <h1>1</h1>
      ) : (
        <img height='300px' width='300px' src={imgSrc} />
      )}
    </div>
  );
};

export default Gallery;
