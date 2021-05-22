import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Search from "./views/Search";
import Content from "./views/Content";



const Routes = ({ queryInput }) => {
  const routesData = [
    {
      path: "/search",
      component: Search,
      name: "Search",
    },
    {
      path: "/content",
      component: Content,
      name: "Content",
    },
    {
      path: "/",
      component: <Home queryInput={queryInput} />,
      name: "Home",
    },
  ];
  return (
    <Switch>
      {routesData.map((each) => (
        <Route key={each.name} path={each.path} component={each.component} />
      ))}
    </Switch>
  );
};

export default Routes;
