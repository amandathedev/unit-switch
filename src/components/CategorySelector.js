import React from "react";
import { useState } from "react";
import Temperature from "./Temperature";
import Weight from "./Weight";
import Speed from "./Speed";
import Length from "./Length";
import Cooking from "./Cooking";
import ButtonGroup from "./ButtonGroup";

const CategorySelector = () => {
  const [displaying, setDisplaying] = useState("");

  switch (displaying) {
    case "temperature":
      return <Temperature setDisplaying={setDisplaying} />;
    case "length":
      return <Length setDisplaying={setDisplaying} />;
    case "weight":
      return <Weight setDisplaying={setDisplaying} />;
    case "speed":
      return <Speed setDisplaying={setDisplaying} />;
    case "cooking":
      return <Cooking setDisplaying={setDisplaying} />;
    default:
      return <ButtonGroup setDisplaying={setDisplaying} />;
  }
};

export default CategorySelector;
