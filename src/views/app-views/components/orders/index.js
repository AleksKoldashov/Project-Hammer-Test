import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import GridComponent from './grid';
import LayoutComponent from './layout'

const LayoutComponents = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/orders`} />
      <Route path={`${match.url}/orders`}/>
    </Switch>
  </div>
);

export default LayoutComponents;