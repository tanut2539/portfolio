import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function LoadingPlaceholder() {
  return <section className="loading-placeholder" />;
}

/* CONTAINERS */
const IndexComponent = Loadable({
  loader: () => import('./containers/Index/Index'),
  loading: LoadingPlaceholder,
});

/* COMPONENTS */
const NotFoundLoadableComponent = Loadable({
  loader: () => import('./components/NotFound/NotFound'),
  loading: LoadingPlaceholder,
});

const Routes = () => (
  <Switch>
    {/* Public Routes */}
    <Route exact path="/" component={IndexComponent} />
    <Route component={NotFoundLoadableComponent} />
  </Switch>
);

const Layout = () => (
  <Fragment >
    <Navbar />
    <Routes />
    <Footer />
  </Fragment >
);

const App = () => (
  <Fragment>
    <Layout />
  </Fragment>
);

export default App;
