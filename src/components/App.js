import React from 'react';
import { Switch, Redirect, Route, useHistory } from 'react-router-dom';

import { MainLayout } from './MainLayout';

import { Authentication, Home } from './pages';

import { ProfileContext } from '../store';

import HomeWork from '@material-ui/icons/HomeWork';
import SportsEsports from '@material-ui/icons/SportsEsports';
import AccountCircle from '@material-ui/icons/AccountCircle';

const App = () => {
  const history = useHistory();
  const { profile } = React.useContext(ProfileContext);

  const pages = [
    {
      title: 'Home',
      href: '/home',
      icon: <HomeWork />,
      component: <Home />,
    },
    {
      title: 'LeaderBoard',
      href: '/leaderboard',
      icon: <SportsEsports />,
      // component: <Leaderboard />,
    },
    {
      title: 'About Me',
      href: '/aboutme',
      icon: <AccountCircle />,
      // component: <Aboutme />,
    },
  ];

  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route component={Authentication} exact path="/authentication" />
      {pages.map((page) => (
        <Route
          exact
          key={page.title}
          path={page.href}
          render={
            () => (
              // profile.status === 'LOGGED_IN' ? (
              <MainLayout pages={pages} component={page.component} />
            )
            // ) : (
            //   <Redirect
            //     to={{
            //       pathname: '/authentication',
            //       state: { from: history.location },
            //     }}
            //   />
            // )
          }
        />
      ))}
    </Switch>
  );
};

export default App;
