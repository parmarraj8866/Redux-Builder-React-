import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routing from "./utils/Routing";
import TableFood from "./Pages/TableFood";
import About from "./UI/About";
import FoodTable from "./Pages/TableFood";
import Navbar from "./Pages/Navbar";

export default function App() {
  return (
    <>
      {/* <CounterUI/> */}

      <BrowserRouter>
      <Navbar/>
        <Routes>
          {Routing.map((p) => (
            <Route key={p.path} path={p.path} element={p.element} />
          ))}
        </Routes>

      </BrowserRouter>

    </>
  );
}
