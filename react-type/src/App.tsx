import React, { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, increment } from "./index";
import "./App.css";
let box: JSX.Element = <div></div>;

function App() {
  const data = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();

  // useState 타입은 자동화
  let [user, setUser] = useState("Jake");

  return (
    <div className="App">
      {data.counter.count}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      ></button>
      <Profile name="John" age="20"></Profile>
    </div>
  );
}
// props 타입 지정 잘하면 버그 줄일 수 있음
function Profile(props: { name: string; age: string }): JSX.Element {
  return <div>{props.name}입니다</div>;
}

export default App;
