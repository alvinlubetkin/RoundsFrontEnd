import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Button, Input } from "@material-ui/core";
import "react-quill/dist/quill.snow.css";

const MainContent = () => {
  const [value, setValue] = useState("");

  const uploadInstructions = () => {
    console.log("value: ", value);
  };
  return (
    <div className="App">
      <div>
        <Button onClick={console.log(value)}>Submit</Button>
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        defaultValue="ENTER INSTRUCTIONS HERE"
      />
    </div>
  );
};
export default MainContent;
