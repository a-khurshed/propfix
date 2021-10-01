import React from 'react';
import { Container, Toolbar, AppBar, makeStyles } from '@material-ui/core';

import { logo } from '../assets/images';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <img src={logo} alt='Propfix Logo' className={classes.logo} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const useStyles = makeStyles(() => ({
  logo: {
    height: 42,
  },
}));

export default Header;
