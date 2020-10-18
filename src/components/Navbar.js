import React, { useState } from "react";
import { Home as HomeIcon, MoreVert as MoreIcon } from "@material-ui/icons";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  bgColor: {
    backgroundColor: "#b19d4f",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  colorWhite: {
    color: "#FFF",
    borderColor: "#FFF",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function Navbar(props) {
  const [mobileAnchor, setMobileAnchor] = useState(null);
  const classes = useStyles();
  const handleMobileMenuOpen = (event) => {
    setMobileAnchor(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileAnchor(null);
  };
  const isMobileMenuOpen = Boolean(mobileAnchor);

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileAnchor}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="primary-search-account-menu-mobile"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button fullWidth>Search Bikes</Button>
      </MenuItem>
      <MenuItem>
        <Button fullWidth>About</Button>
      </MenuItem>
      <MenuItem>
        <Button fullWidth>Help</Button>
      </MenuItem>
      <MenuItem>
        <Button fullWidth>Login</Button>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="relative" className={classes.bgColor}>
        <Toolbar>
          <HomeIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Berlin Police Department
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button className={classes.colorWhite}>Search Bikes</Button>
            <Button className={classes.colorWhite}>About</Button>
            <Button className={classes.colorWhite}>Help</Button>
            <Button className={classes.colorWhite} variant="outlined">
              Login
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls="primary-search-account-menu-mobile"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
}

export default Navbar;
