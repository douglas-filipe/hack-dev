import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/landingPage";
import { EventsUser } from "../pages/user/EventsUser/Index";
import { ConfigUser } from "../pages/user/ConfigUser";
import { HomeUser } from "../pages/user/HomeUser";
import { LoginUser } from "../pages/user/LoginUser";
import { EventUser } from "../pages/user/EventUser";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home-user" element={<HomeUser />} />
      <Route path="/login-user" element={<LoginUser />} />
      <Route path="/events-user" element={<EventsUser />} />
      <Route path="/events-user/:id" element={<EventUser />} />
    </Routes>
  );
};
