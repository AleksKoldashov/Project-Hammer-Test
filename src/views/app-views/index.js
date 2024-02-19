import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
      
       
        <Route path={`${APP_PREFIX_PATH}/components`} component={lazy(() => import(`./components`))} />
        <Route path={`${APP_PREFIX_PATH}/components-sistem`} component={lazy(() => import(`./components-sistem`))} />
 
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);
