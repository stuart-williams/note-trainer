import { Center, CircularProgress } from "@chakra-ui/react";
import loadable from "@loadable/component";
import Page from "components/Page";
import IndexPage from "pages";
import React, { FC } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const fallback = (
  <Center>
    <CircularProgress isIndeterminate />
  </Center>
);

const NameTheNote = loadable(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "name-the-note"*/
      "pages/name-the-note"
    ),
  {
    fallback,
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
    fallback,
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
    fallback,
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
    fallback,
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
    fallback,
  }
);

const App: FC = () => (
  <Router>
    <Switch>
      <Route path="/name-the-note">
        <Page title="Name the Note">
          <NameTheNote />
        </Page>
      </Route>
      <Route path="/find-the-note">
        <Page title="Find the Note">
          <FindTheNote />
        </Page>
      </Route>
      <Route path="/fretboard-reference">
        <Page title="Fretboard Reference">
          <FretboardReference />
        </Page>
      </Route>
      <Route path="/settings">
        <Page title="Settings">
          <Settings />
        </Page>
      </Route>
      <Route path="/statistics">
        <Page title="Statistics">
          <Statistics />
        </Page>
      </Route>
      <Route path="/">
        <Page>
          <IndexPage />
        </Page>
      </Route>
    </Switch>
  </Router>
);

export default App;
