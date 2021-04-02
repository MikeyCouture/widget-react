import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

//Options array that provide the languages
const options = [
  {
    label: "Afrikaans",
    value: "af"
  },
  {
    label: "Arabic",
    value: "ar"
  },
  {
    label: "Hindi",
    value: "hi"
  },
  {
    label: "French",
    value: "fr"
  },
  {
    label: "Persian",
    value: "fa"
  },
  {
    label: "Russian",
    value: "ru"
  }
];

//our actual functional component
const Translate = () => {
  //our use state which is setting the default language
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
      </div>

      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
