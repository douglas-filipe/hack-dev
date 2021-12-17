import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/landingPage";
import { EventsUser } from "../pages/user/EventsUser/Index";
import { ConfigUser } from "../pages/user/ConfigUser";
import { HomeUser } from "../pages/user/HomeUser";
import { LoginUser } from "../pages/user/LoginUser";
import { EventUser } from "../pages/user/EventUser";
import { SignupUser } from "../pages/user/SignupUser";
import { useAuth } from "../contexts/Auth";
import { RecuperatePassword } from "../pages/user/RecuperatePassword";
import { PrizeUser } from "../pages/user/PrizesUser";

export const RoutesMain = () => {
  const { token } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/home-user"
        element={token ? <HomeUser /> : <Navigate replace to="/login-user" />}
      />
      <Route
        path="/login-user"
        element={token ? <Navigate replace to="/home-user" /> : <LoginUser />}
      />
      <Route
        path="/signup-user"
        element={token ? <Navigate replace to="/home-user" /> : <SignupUser />}
      />
      <Route
        path="/events-user"
        element={token ? <EventsUser /> : <Navigate replace to="/login-user" />}
      />
      <Route
        path="/events-user/:id"
        element={token ? <EventUser /> : <Navigate replace to="/login-user" />}
      />

      <Route
        path="/config-user"
        element={token ? <ConfigUser /> : <Navigate replace to="/login-user" />}
      />

      <Route
        path="/prize-user"
        element={token ? <PrizeUser /> : <Navigate replace to="/login-user" />}
      />
      <Route path="/recuperate-password" element={<RecuperatePassword />} />
    </Routes>
  );
};
