import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/landingPage";
import { HomeUser } from "../pages/user/HomeUser";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home-user" element={<HomeUser/>} />
    </Routes>
  );
};
