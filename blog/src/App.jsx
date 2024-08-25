
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog"
import GuestLog from "./pages/GuestLog";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/GuestLog" element={<GuestLog />} />

      </Routes>
    </Router>
  );
}

export default App;

