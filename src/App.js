import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";

export default function App() {
  return (
    <div className="App">
      <Profile name="Tarak Dhiab" bio="né le 15 juillet 1954 à Tunis, est un footballeur et homme politique tunisien" profession="footballeur">
        <img
          className="img"
          src="https://fr.orangefootballclub.com/wp-content/uploads/2020/06/09122857/Capture.jpg"
          alt="pic"
          height={"500px"}
          width={"350px"}
        />
      </Profile>
    </div>
  );
}