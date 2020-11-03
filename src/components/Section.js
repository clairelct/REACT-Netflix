import React from "react";
import Image from "./Image";

const Section = ({ category, images }) => {
  // console.log(images);
  return (
    <>
      <div className="section-container">
        <p>{category}</p>
        <div>
          {images.map((image) => {
            // console.log(image);
            return <Image imageUrl={image} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Section;
