import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/landingPage";
import { ConfigUser } from "../pages/user/ConfigUser";
import { HomeUser } from "../pages/user/HomeUser";
import { LoginUser } from "../pages/user/LoginUser";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home-user" element={<HomeUser />} />
      <Route path="/login-user" element={<LoginUser />} />
    </Routes>
  );
};
