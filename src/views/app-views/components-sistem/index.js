import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';


const ComponentsSistem = ({ match }) => (
 
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
        <Route path={`${match.url}/com-settings`} component={lazy(() => import(`./com-settings`))}/>
        <Route path={`${match.url}/mobile-applications`} component={lazy(() => import(`./mobile-applications`))}/>
        <Route path={`${match.url}/com-logs`} component={lazy(() => import(`./com-logs`))}/>
    </Switch>
  </Suspense>
);

export default ComponentsSistem;