import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UserList from './user-list';

const NavigationComponents = ({ match }) => (
  <div>
    <Switch>
      <Route path={`${match.url}/users-group`} />
      <Route path={`${match.url}/user-list`} component={UserList} />
    </Switch>
  </div>
);

export default NavigationComponents;