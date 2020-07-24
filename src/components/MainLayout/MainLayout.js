import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Header, Footer } from './components';

const useStyles = makeStyles((theme) => ({}));

const MainLayout = (props) => {
  const { component, pages } = props;

  const classes = useStyles();

  return (
    <div>
      <Header pages={pages} />
      <div>{component}</div>
      <Footer />
    </div>
  );
};
export default MainLayout;
