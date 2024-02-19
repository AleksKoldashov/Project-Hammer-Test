import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Components = ({ match }) => (
 
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/catalog/products`} />
      <Route path={`${match.url}/catalog`} component={lazy(() => import(`./catalog`))} />
      <Route path={`${match.url}/orders`}/>
      <Route path={`${match.url}/users`} component={lazy(() => import(`./users`))} />
      <Route path={`${match.url}/banners`} component={lazy(() => import(`./banners`))} />
      <Route path={`${match.url}/promotional`} component={lazy(() => import(`./promotional`))} />
      <Route path={`${match.url}/offline-points`} component={lazy(() => import(`./offline-points`))} />
      <Route path={`${match.url}/employees`} component={lazy(() => import(`./employees`))} />
      <Route path={`${match.url}/mailings`} component={lazy(() => import(`./mailings`))} />
      <Route path={`${match.url}/dashbosh`} component={lazy(() => import(`./dashbosh`))} />
    </Switch>
  </Suspense>
);

export default Components;