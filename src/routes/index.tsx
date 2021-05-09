import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import MainPage from "../pages/MainPage";
export default function Root() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
