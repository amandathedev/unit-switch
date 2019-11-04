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
      return <Temperature />;
    case "length":
      return <Length />;
    case "weight":
      return <Weight />;
    case "speed":
      return <Speed />;
    case "cooking":
      return <Cooking setDisplaying={setDisplaying} />;
    default:
      return <ButtonGroup setDisplaying={setDisplaying} />;
  }
};

export default CategorySelector;
