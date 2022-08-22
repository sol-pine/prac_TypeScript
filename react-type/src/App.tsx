import React, { useState } from "react";
import "./App.css";

let box: JSX.Element = <div></div>;

function App() {
  // useState 타입은 자동화
  let [user, setUser] = useState("Jake");

  return (
    <div className="App">
      <Profile name="John" age="20"></Profile>
    </div>
  );
}
// props 타입 지정 잘하면 버그 줄일 수 있음
function Profile(props: { name: string; age: string }): JSX.Element {
  return <div>{props.name}입니다</div>;
}

export default App;
