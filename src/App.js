import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
// import { useState } from "react/cjs/react.production.min";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework"
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS library among engineers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
];

const options = [
  {
    label: "The Colour Red",
    value: "red"
  },
  {
    label: "The Colour Green",
    value: "green"
  },
  {
    label: "A Shade of Blue",
    value: "blue"
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        onSelectedChange={setSelected}
        selected={selected}
        options={options}
      />
    </div>
  );
};
