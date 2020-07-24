import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    right: '0',
    paddingLeft: '1350px',
    paddingBottom: '40px',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1">&copy;{'Nishma Games 2020'}</Typography>
      <Typography variant="caption">Summer 2020 project</Typography>
    </div>
  );
};
export default Footer;
