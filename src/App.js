import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./container/Home/Home";
import Test from "./container/Test/Test";
import Home_Banner from "./admin/src/pages/Home_Banner/Home_Banner";
// npm install react-router-dom

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/admin/home_banner" element={<Home_Banner />} />
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
