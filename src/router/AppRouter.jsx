import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import { useState } from "react";

const AppRouter = () => {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
