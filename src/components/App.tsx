import loadable from "@loadable/component";
import AppBar from "components/AppBar";
import IndexPage from "pages";
import React, { FC } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const NameTheNote = loadable(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "name-the-note"*/
      "pages/name-the-note"
    ),
  {
    fallback: <p>Loading...</p>,
  }
);

const FindTheNote = loadable(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "find-the-note"*/
      "pages/find-the-note"
    ),
  {
    fallback: <p>Loading...</p>,
  }
);

const FretboardReference = loadable(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "fretboard-reference"*/
      "pages/fretboard-reference"
    ),
  {
    fallback: <p>Loading...</p>,
  }
);

const Settings = loadable(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "settings"*/
      "pages/settings"
    ),
  {
    fallback: <p>Loading...</p>,
  }
);

const Statistics = loadable(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "statistics"*/
      "pages/statistics"
    ),
  {
    fallback: <p>Loading...</p>,
  }
);

const App: FC = () => (
  <Router>
    <AppBar />
    <Switch>
      <Route path="/name-the-note">
        <NameTheNote />
      </Route>
      <Route path="/find-the-note">
        <FindTheNote />
      </Route>
      <Route path="/fretboard-reference">
        <FretboardReference />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/statistics">
        <Statistics />
      </Route>
      <Route path="/">
        <IndexPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
