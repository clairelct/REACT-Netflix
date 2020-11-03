import React from "react";
import Section from "./Section";

const Sections = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        console.log(item);
        return <Section category={item.category} images={item.images} />;
      })}
    </>
  );
};

export default Sections;
