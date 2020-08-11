import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Button, Input } from "@material-ui/core";
import "react-quill/dist/quill.snow.css";
import db from "./db";
import data from "./roundsDataStructure";
const ExampleForm = () => {
  //change/create state variables for each element in roundsDataStructure
  const [conductivityP2, setValue] = useState("");
  const [name, setName] = useState("");
  const [conductivityP1, setConductivity] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("bitchass value: ", value);
    //upload to MongoDB
    // let newData = dataHelper(condP1, condP2);
    // db.write("newDataName", newData);
  };

  const dataHelper = () => {
    let result;
    data[29].conductivity.p1 = conductivityP1;
    //do this for the rest of elements in data structure
    return result;
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 
      makes a label w input inside for each element in roundsDataStructure
      */}
      <label>
        Machine Name:
        <input
          type="text"
          value={conductivity}
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
