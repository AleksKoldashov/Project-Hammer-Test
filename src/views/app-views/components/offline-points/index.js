import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Address from './address';
import Geofences from './geofences';




const OfflinePoints = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/address`} />
      <Route path={`${match.url}/address`} component={Address} />
      <Route path={`${match.url}/geofences`} component={Geofences} />
    </Switch>
  </div>
);

export default OfflinePoints;