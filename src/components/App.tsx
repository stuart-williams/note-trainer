import AppBar from "components/AppBar";
import IndexPage from "pages";
import FindTheNotePage from "pages/find-the-note";
import NameTheNotePage from "pages/name-the-note";
import SettingsPage from "pages/settings";
import StatisticsPage from "pages/statistics";
import React, { FC } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const App: FC = () => (
  <Router>
    <AppBar />
    <Switch>
      <Route path="/name-the-note">
        <NameTheNotePage />
      </Route>
      <Route path="/find-the-note">
        <FindTheNotePage />
      </Route>
      <Route path="/settings">
        <SettingsPage />
      </Route>
      <Route path="/statistics">
        <StatisticsPage />
      </Route>
      <Route path="/">
        <IndexPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
