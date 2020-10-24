import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Link } from '@reach/router';
import Button from '@material-ui/core/Button';

export interface Props {
    children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      menuButton: {
          marginRight: theme.spacing(2),
      },
      title: {
          flexGrow: 1,
          fontWeight: 900,
          color: "#fff"
      },
      login: {
          fontWeight: 600,
          color: "#fff"
      },
      loginLink: {
          textDecoration: "none",
          color: "#fff"
      },
      link: {
          color: "#fff",
          textDecoration: "none"
      }
  }),
);

const NavMenu = (props: Props)=> {
    const classes = useStyles();
    return (
      <React.Fragment>
          <CssBaseline />
          <AppBar>
              <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                      <Link to="/" className={classes.link}>
                          Threadit
                      </Link>
                  </Typography>
                  <Button
                    className={classes.login}
                  >
                      <Link to="login" className={classes.link}>
                          Sign Up/Login
                      </Link>
                  </Button>
              </Toolbar>
          </AppBar>
          <Toolbar id="back-to-top-anchor" />
          <Container maxWidth="lg">
              <Box mt={3}>
                  {props.children}
              </Box>
          </Container>
      </React.Fragment>
    );
};

export default NavMenu;
