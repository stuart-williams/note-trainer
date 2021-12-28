import { Center, CircularProgress } from "@chakra-ui/react";
import loadable from "@loadable/component";
import IndexPage from "pages";
import React, { FC } from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Page from "./Page";

const fallback = (
  <Center h="100%">
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
    <Routes>
      <Route
        path="/name-the-note"
        element={
          <Page title="Name the Note" landscape>
            <NameTheNote />
          </Page>
        }
      />
      <Route
        path="/find-the-note"
        element={
          <Page title="Find the Note" landscape>
            <FindTheNote />
          </Page>
        }
      />
      <Route
        path="/fretboard-reference"
        element={
          <Page title="Fretboard Reference" landscape>
            <FretboardReference />
          </Page>
        }
      />
      <Route
        path="/settings"
        element={
          <Page title="Settings">
            <Settings />
          </Page>
        }
      />
      <Route
        path="/statistics"
        element={
          <Page title="Statistics">
            <Statistics />
          </Page>
        }
      />
      <Route
        path="/"
        element={
          <Page>
            <IndexPage />
          </Page>
        }
      />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </Router>
);

export default App;
