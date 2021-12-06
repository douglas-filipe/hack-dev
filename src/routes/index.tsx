import { Route, Switch } from "react-router-dom";
import { LandingPage } from "../pages/landingPage";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
          <LandingPage/>
      </Route>
    </Switch>
  );
};
