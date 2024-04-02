import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import { useState } from "react";
import CarDetail from "../pages/CarDetail";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const AppRouter = () => {
  const [search, setSearch] = useState("");

  const [resDate, setResDate] = useState({
    startDate: "",
    endDate: "",
  });
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              resDate={resDate}
              setResDate={setResDate}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cars/:id" element={<PrivateRouter />}>
          <Route path="" element={<CarDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
