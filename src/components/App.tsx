import { Center, CircularProgress } from "@chakra-ui/react";
import loadable from "@loadable/component";
import Layout from "components/Layout";
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
        <Layout title="Name the Note">
          <NameTheNote />
        </Layout>
      </Route>
      <Route path="/find-the-note">
        <Layout title="Find the Note">
          <FindTheNote />
        </Layout>
      </Route>
      <Route path="/fretboard-reference">
        <Layout title="Fretboard Reference">
          <FretboardReference />
        </Layout>
      </Route>
      <Route path="/settings">
        <Layout title="Settings">
          <Settings />
        </Layout>
      </Route>
      <Route path="/statistics">
        <Layout title="Statistics">
          <Statistics />
        </Layout>
      </Route>
      <Route path="/">
        <Layout>
          <IndexPage />
        </Layout>
      </Route>
    </Switch>
  </Router>
);

export default App;
