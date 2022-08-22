import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const 초기값: { count: number; user: string } = { count: 0, user: "kim" };

const counterSlice = createSlice({
  name: "counter",
  initialState: 초기값,
  reducers: {
    // 파라미터 state는 초기값 타입으로 자동 지정
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    // action : PayloadAction(type) <dispatch할 때 보낼 payload의 타입>
    incrementByAmount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

let store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// export state 타입
export type RootState = ReturnType<typeof store.getState>;

// export reducers
export let { increment, decrement, incrementByAmount } = counterSlice.actions;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
