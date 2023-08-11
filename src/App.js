import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import RecentBook from "./pages/RecentBook";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/detail/:title" element={<Detail />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/recentbook" element={<RecentBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
