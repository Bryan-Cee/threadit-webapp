import React, { FC, ChangeEvent, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { RouteComponentProps, Link, Redirect } from '@reach/router';
import { REGISTER } from "../gql";
import { useMutation } from '@apollo/client';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: "#fff"
    },
}));

const Register: FC<RouteComponentProps> = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [userError, setUserError] = useState("");
    const [register, { data, loading, error }] = useMutation(REGISTER, { errorPolicy: "all" });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.name === "email") {
            setEmail(e.currentTarget.value)
        } else {
            setPassword(e.target.value)
        }
    };

    if (loading) return <p>Loading ...</p>;

    if (data?.register?.token) { console.log(data) }

    if (error) {
        Object.values(error);
        console.log(error);
        if (error.name === "USER_ALREADY_EXISTS") {
            setUserError(error.name);
        }
    }

    return (
      <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                  Create Account
              </Typography>
              {userError && <Alert severity="error">{userError}</Alert>}
              <form className={classes.form} onSubmit={(e) => {
                  e.preventDefault();
                  try {
                      register({ variables: { email, password }})
                  } catch (e) {
                      throw new Error(e.message);
                  }
                  return false;
              }}>
                  <Grid container spacing={2}>
                      <Grid item xs={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange}
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                          />
                      </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                      Create Account
                  </Button>
                  <Grid container justify="flex-end">
                      <Grid item>
                          <Link to="/login">
                              Already have an account? Sign in
                          </Link>
                      </Grid>
                  </Grid>
              </form>
          </div>
      </Container>
    );
};

export default Register;
