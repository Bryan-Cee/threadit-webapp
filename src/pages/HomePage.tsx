import React, { FC } from 'react';
import { RouteComponentProps } from "@reach/router";
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { makeStyles } from '@material-ui/core/styles';

import NavItem from "../components/NavItem";
import SuggestionNav from "../components/SuggestionNav";
import ScrollTop from "../components/ScrollToTop";
import ThreaditPostInput from "../components/ThreaditPostInput";
import ThreaditPost from "../components/ThreaditPost";
import { ReactComponent as Messages } from "../assets/img/messages.svg"
import { ReactComponent as Communities } from "../assets/img/communities.svg"
import { ReactComponent as Notification } from "../assets/img/notifications.svg"
import { ReactComponent as Threadit } from "../assets/img/threadit.svg"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#F2F2F2",
        borderRadius: theme.spacing(1)
    },
    margin: {
        padding: theme.spacing(4),
    },
    list: {
        padding: 0,
        listStyle: "none"
    },
    button: {
        background: "white",
        borderRadius: "30px",
        marginBlockStart: 0,
        fontWeight: 900
    },
    lastButton: {
        marginBlockEnd: 0
    },
    link: {
        textDecoration: "none",
        color: "#2699FB"
    },
    feeds: {
        // overflowY: "scroll",
        // height: "calc(100vh - 72px)"
    },
    sideNavTitle:{
        marginLeft: theme.spacing(1.5),
        fontWeight: 900,
        fontSize: "2em",
        color: "#2699FB",
        lineHeight: 0.8,
    },
    scroll: {
        overflowX:"scroll",
        "& > div:not(:first-child)": {
            marginLeft: "1em"
        },
        '&::-webkit-scrollbar': {
            height: '3px'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 2px grey',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,
        }
    }
}));

const HomePage: FC<RouteComponentProps> = (props) => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
          <Grid container spacing={2}>
              <Grid item xs style={{ maxWidth: "250px" }}>
                  <div className={classes.feeds}>
                      <Paper elevation={0} className={classes.paper}>
                          <Box margin={1}>
                              <NavItem
                                path={"/"}
                                icon={<Threadit style={{ marginRight: "1em" }} />}
                                title="Threadit"
                              />
                              <NavItem
                                path={"/communities"}
                                icon={<Communities style={{ marginRight: "1em" }} />}
                                title="Communities"
                              />
                              <NavItem
                                path={"/message"}
                                icon={<Messages style={{ marginRight: "1em" }} />}
                                title="Messages"
                              />
                              <NavItem
                                path={"/notification"}
                                icon={<Notification style={{ marginRight: "1em" }} />}
                                title="Notification"
                              />
                          </Box>
                      </Paper>
                  </div>
              </Grid>
              <Grid item xs={6}>
                  <div>
                      {props.children}
                  </div>
              </Grid>
              <Grid item xs style={{ maxWidth: "400px" }}>
                  <Paper elevation={0} className={classes.paper}>
                      <SuggestionNav />
                  </Paper>
              </Grid>
          </Grid>
          <ScrollTop {...props}>
              <Fab color="secondary" size="small" aria-label="scroll back to top">
                  <KeyboardArrowUpIcon />
              </Fab>
          </ScrollTop>
      </div>
    );
};

export default HomePage;
