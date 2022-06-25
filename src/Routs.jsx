import React from "react";
import About from "./component/About";
import Home from "./component/Home";
import Tool from "./component/Tool";
import Error from "./component/Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./component/Main";

const Routs = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Main/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/tool" element={<Tool />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routs;
