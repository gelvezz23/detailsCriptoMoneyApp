import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "./../container/Home";
import Details from "./../container/Details";
import NotFound from "../container/NotFound";
import Filter from "./../container/Filters";
const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/filters" component={Filter} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
