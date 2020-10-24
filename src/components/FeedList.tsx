import React, { FC } from 'react';
import { RouteComponentProps } from "@reach/router";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

import ThreaditPost from "./ThreaditPost";
import ThreaditPostInput from "./ThreaditPostInput";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#F2F2F2",
        borderRadius: theme.spacing(1)
    },
    margin: {
        padding: theme.spacing(4),
    }
}));

const FeedList: FC<RouteComponentProps> = () => {
    const classes = useStyles();
    return (
      <Paper elevation={0} className={`${classes.paper} ${classes.margin}`}>
          <ThreaditPostInput />
          <Box my={8} />
          <div>
              <ThreaditPost />
              <ThreaditPost />
              <ThreaditPost />
              <ThreaditPost />
              <ThreaditPost />
              <ThreaditPost />
              <ThreaditPost />
              <ThreaditPost />
              <ThreaditPost />
              <ThreaditPost />
              <ThreaditPost />
              <ThreaditPost />
              <ThreaditPost />
              <ThreaditPost />
              <ThreaditPost />
              <ThreaditPost />
          </div>
      </Paper>
    );
};

export default FeedList;
