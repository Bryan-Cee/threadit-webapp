import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      root: {
          marginBottom: theme.spacing(4)
      },
      media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
      },
      avatar: {
          backgroundColor: blue[500],
      },
      content: {
        flexGrow: 0,
        textAlign: "left"
      },
      actions: {
          display: "flex",
          justifyContent: "space-between",
          "& > button": {
              color: theme.palette.primary.main
          }
      }
  }),
);

const ThreaditPost = () => {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
          <CardHeader
            avatar={
                <Avatar aria-label="recipe" src="https://images.unsplash.com/photo-1603401756871-4914e529175f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className={classes.avatar}>
                    R
                </Avatar>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
            classes={{
                content: classes.content,
            }}
          />
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1603401756871-4914e529175f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            title="Paella dish"
          />
          <CardContent>
              <Typography align="left" variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your
                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
              <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="view comment">
                  <CommentRoundedIcon />
              </IconButton>
              <IconButton aria-label="share">
                  <ShareIcon />
              </IconButton>
          </CardActions>
      </Card>
    );
};

export default ThreaditPost;
