import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Button, Input } from "@material-ui/core";
import "react-quill/dist/quill.snow.css";

const ExampleForm = () => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("bitchass value: ", value);
    //upload to MongoDB
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Machine Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Enter Instructions:
        <input
          multiline={true}
          rows={10}
          rowsmax={50}
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
export default ExampleForm;
