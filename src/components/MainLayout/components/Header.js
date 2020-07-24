import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  ListItemText,
  Typography,
  ListItemIcon,
  Menu,
  Grid,
  MenuItem,
  Link,
} from '@material-ui/core';

import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';

import HomeLogoImg from '../../../assets/images/homelogo.jpg';

import { AuthenticationActions } from '../../../actions';
import { ProfileContext } from '../../../store';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: '10px 0px 10px 0px',
    width: theme.spacing(16),
    height: theme.spacing(11),
  },
  header: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.myBackground.secondary,
  },

  background: {
    height: '100vh',
    backgroundColor: theme.palette.myBackground.primary,
  },

  expansion: {
    flexGrow: 1,
  },

  iconButton: {
    color: theme.palette.myText.primary,
    textTransform: 'none',
    fontSize: '18px',
    // margin: '0px 20px 0px 20px',
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const Header = (props) => {
  const { pages } = props;

  const classes = useStyles();
  const { profile, profileDispatch } = React.useContext(ProfileContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={5}
          >
            <Grid item>
              <Avatar
                variant="circle"
                className={classes.avatar}
                src={HomeLogoImg}
              />
            </Grid>
            {pages.map((page) => (
              <Grid item key={page.title}>
                <Link href={page.href} variant="body2" underline="none">
                  <Button className={classes.iconButton} startIcon={page.icon}>
                    {page.title}
                  </Button>
                </Link>
              </Grid>
            ))}
            <div className={classes.expansion}></div>
            <Grid item>
              <Button
                startIcon={<ArrowDropDownCircleOutlinedIcon />}
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.iconButton}
              >
                More
              </Button>
            </Grid>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <ListItemIcon>
                  <AccountCircleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="My account" />
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <PowerSettingsNew />
                </ListItemIcon>
                <ListItemText
                  onClick={() => {
                    AuthenticationActions.logout(profileDispatch);
                  }}
                  primary="Logout"
                />
              </MenuItem>
            </StyledMenu>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
