import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';

const useStyles = makeStyles((theme) => ({
    avatar:{
        marginRight: theme.spacing(2)
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        fontWeight: 900,
        borderRadius: theme.spacing(5)
    },
    threaditInput: {
        backgroundColor: theme.palette.background.default,
        width: "100%",
        fontSize: theme.spacing(2.25)
    },
}));

const ThreaditPostInput = () => {
    const classes = useStyles();
    return (
      <div>
        <Paper elevation={0}>
            <Box display="flex" pt={3} pb={2} px={3}>
                <Avatar
                  className={classes.avatar}
                  alt="Cindy Baker"
                  src="https://images.unsplash.com/photo-1603401756871-4914e529175f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                />
                <Box width="100%">
                    <InputBase
                      multiline={true}
                      rows={3}
                      rowsMax={8}
                      className={classes.threaditInput}
                      inputProps={{ 'aria-label': 'naked' }}
                      placeholder="What's trending?"
                    />
                    <Divider variant="fullWidth" />
                    <Box
                      mt={2}
                      display="flex"
                      alignContent="center"
                      justifyContent="space-between"
                    >
                        <InsertPhotoOutlinedIcon
                          color="primary"
                            fontSize="large"
                        />
                        <Button className={classes.button}>Send</Button>
                    </Box>
                </Box>
            </Box>
        </Paper>
      </div>
    );
};

export default ThreaditPostInput;
