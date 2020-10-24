import React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { makeStyles, Theme } from '@material-ui/core/styles';

import ImageCard from "../components/ImageCard";

const useStyles = makeStyles((theme: Theme) => ({
    title:{
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

const SuggestionNav = () => {
    const classes = useStyles();
    return (
      <div>
          <Box marginBottom={2} textAlign="left">
              <Typography className={classes.title}>
                  Popular
              </Typography>
          </Box>
          <Divider variant="fullWidth" />
          <Box
            display="flex"
            flexWrap="nowrap"
            margin={2}
            className={classes.scroll}
          >
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
          </Box>
      </div>
    );
};

export default SuggestionNav;
