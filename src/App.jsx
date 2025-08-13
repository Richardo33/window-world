import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./pages/style/reset.css";
import Landing from "./pages/landing";
import Home from "./pages/home";
import DetailBook from "./pages/DetailBook";
import MyList from "./pages/MyList";
import Profile from "./pages/Profile";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Halaman Landing */}
          <Route path="/" element={<Landing />} />

          {/* Halaman dengan Sidebar */}
          <Route path="/home" element={<Home />} />

          <Route path="/detail/:id" element={<DetailBook />}/>
          <Route
            path="/my-list"
            element={<MyList /> }/>

          <Route
            path="/profile"
            element={<Profile /> }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
