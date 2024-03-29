import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Admin } from "./components/Admin/Admin";
import { Biography } from "./components/Biography/Biography";
import { Repetoire } from "./components/Repetoire/Repetoire";
import { Media } from "./components/Media/Media";
import { Schedule } from "./components/Schedule/Schedule";
import { Contact } from "./components/Contact/Contact";
import { NotFound } from "./components/NotFound/NotFound";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const URLTOUSE: any =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/"
    : process.env.REACT_APP_BACKEND_URL;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Admin' element={<Admin />}></Route>
          <Route path='/Biography' element={<Biography />}></Route>
          <Route path='/Repetoire' element={<Repetoire />}></Route>
          <Route path='/Media' element={<Media />}></Route>
          <Route path='/Schedule' element={<Schedule />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
