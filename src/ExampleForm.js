import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Button, Input } from "@material-ui/core";
import "react-quill/dist/quill.snow.css";
import db from "../backend/db";
import { data } from "./roundsDataStructure";
const ExampleForm = () => {
  //change/create state variables for each element in roundsDataStructure
  const [conductivityP2, setConductivityP2] = useState("");
  const [conductivityP1, setConductivityP1] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    //upload to MongoDB
    let newData = dataHelper();
    console.log("new data: ", newData);
    // db.write("newDataName", newData);
  };

  const dataHelper = () => {
    let result;
    data[29].conductivity.p1 = conductivityP1;
    data[29].conductivity.p2 = conductivityP2;
    //do this for the rest of elements in data structure
    return data;
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 
      makes a label w input inside for each element in roundsDataStructure
      */}
      <label>
        Conductivity P1
        <input
          type="text"
          value={conductivityP1}
          onChange={(event) => setConductivityP1(event.target.value)}
        />
      </label>
      <label>
        Conductivity P2{" "}
        <input
          type="text"
          value={conductivityP2}
          onChange={(event) => setConductivityP2(event.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
export default ExampleForm;
