import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import NotFound from './Routes.lazy';
import App from '../components/App';
import AboutUs from '../components/aboutUs/AboutUs';
import WishList from '../components/wishlist/WishList';

const Routes = () => (
  <>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/home" component={App} />
          <Route path="/about" component={AboutUs} />
          <Route path="/wishlist" component={WishList} />
          <Route path="/notfound" component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </>
);
export default Routes;
