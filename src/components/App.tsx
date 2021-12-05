import { Center, CircularProgress, Flex, VStack } from "@chakra-ui/react";
import loadable from "@loadable/component";
import AppBar from "components/AppBar";
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
    <AppBar mb={2} />
    <Flex as={VStack} flex="1 1 auto" align="stretch" p={2}>
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
    </Flex>
  </Router>
);

export default App;
