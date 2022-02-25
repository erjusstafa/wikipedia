import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Favourites from "./components/Favourites";

function App() {
  return (
    <div className="app--wrapper">
    <div className="app--wrapper--container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/favorite"} element={<Favourites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
