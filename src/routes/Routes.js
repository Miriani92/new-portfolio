import React from "react";
import Hero from "../components/Hero";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" exact element={<Hero />} />
      </Routes>
    </div>
  );
};

export default Router;
