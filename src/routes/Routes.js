import React from "react";
import { Routes, Route } from "react-router-dom";
import Page from "../page/Page";
const Router = () => {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" exact element={<Page />} />
      </Routes>
    </div>
  );
};

export default Router;
