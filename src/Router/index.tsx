import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "./../container/Home";
import NotFound from "../container/NotFound";
const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
