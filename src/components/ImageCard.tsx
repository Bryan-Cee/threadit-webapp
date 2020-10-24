import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    imageCard: {
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%)," +
                    " url('https://images.unsplash.com/photo-1603401756871-4914e529175f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60') no-repeat",
        width: "100px",
        height: "100px",
        display: "flex",
        alignItems: "flex-end",
        fontSize: "10px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "5px",
    },
    imageCardBody: {
        textAlign: "left",
        paddingLeft: "1em",
        paddingBottom: "0.5em",
        color: "white"
    },
    caption: {
        lineHeight: "1.2"
    }
}));

const ImageCard = () => {
    const classes = useStyles();
    return (
      <div onClick={() => console.log("image clicked")}>
          <Box className={classes.imageCard}>
              <div className={classes.imageCardBody}>
                  <Typography
                    classes={{ caption: classes.caption }}
                    variant="caption"
                    display="block"
                  >
                      uon/music
                  </Typography>
                  <Typography
                    classes={{ caption: classes.caption }}
                    variant="caption"
                    display="block"
                  >
                      12.4k members
                  </Typography>
              </div>
          </Box>
      </div>
    );
};

export default ImageCard;
