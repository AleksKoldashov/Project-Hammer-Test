import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Combo from './combo';
import Categories from './categories';
import CollectionsKatalog from './сollections';
import ProductComponent from './products';




const GeneralComponents = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/products`} />
      <Route path={`${match.url}/products`} component={ProductComponent} />
      <Route path={`${match.url}/combo`} component={Combo} />
      <Route path={`${match.url}/categoreis`} component={Categories}/>
      <Route path={`${match.url}/collections`} component={CollectionsKatalog}/>
    </Switch>
  </div>
);

export default GeneralComponents;