import * as React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import BASE_ROUTE from './../constants/Routes';
import App from './../containers/App';

const DummyComponent = () => (
  <div>
    Hi There!
  </div>
);

export default (
  <Route path={BASE_ROUTE} component={App}>
    <IndexRoute component={DummyComponent} />
    <Redirect from="/*" to={BASE_ROUTE} />
  </Route>
);
