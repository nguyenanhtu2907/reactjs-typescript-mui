import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { lazy } from '@loadable/component';

import './App.scss';

const Home = lazy(() => import('./pages/home/Home'));

const App: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div className="App">
      <Suspense fallback={<div />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
