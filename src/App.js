import React from "react";
import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="photo-profile">{/* <img  /> */}</div>
      <div className="numbers">
        <Counter number={105} title="Posts" />
        <Counter number={5175} title="Followers" />
        <Counter number={468} title="Following" />
      </div>
    </div>
  );
}
