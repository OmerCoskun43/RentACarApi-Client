import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import { useState } from "react";
import CarDetail from "../pages/CarDetail";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";

const AppRouter = () => {
  const [search, setSearch] = useState("");

  const [resDate, setResDate] = useState({
    startDate: "",
    endDate: "",
  });
  return (
    <Router>
      <Navbar
        search={search}
        setSearch={setSearch}
        resDate={resDate}
        setResDate={setResDate}
      />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cars/:id" element={<PrivateRouter />}>
          <Route path="" element={<CarDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
