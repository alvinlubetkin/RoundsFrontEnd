import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import MainContent from "./MainContent";
import ExampleForm from "./ExampleForm";

function App() {
  //probably will end up being async

  // const ponchNeedsToKnow = () => {
  //   console.log("ponchis dumb");
  //   // query backend here
  // };

  // const ponchTheTeacher = () => {
  //   console.log(teachings);
  //   const newTeaching = { item: "new_teaching", data: teachings };
  //   //send new info to backend for storage
  // };

  // const onChange = () => {
  //   o;
  // };

  return (
    <div className="App">
      <ExampleForm />
      {/* <MainContent /> */}
    </div>
  );
}
export default App;
