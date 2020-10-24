import React, { FC } from 'react';
import { RouteComponentProps, Link } from "@reach/router";
import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        background: "white",
        borderRadius: "30px",
        marginBottom: theme.spacing(1),
        fontWeight: 900
    },
    link: {
        textDecoration: "none",
        color: "#2699FB"
    }
}));

interface INavItemProps {
    icon: any,
    title: string,
    path: string
}

const NavItem: FC<RouteComponentProps & INavItemProps> = ({ icon, title, path }) => {
    const classes = useStyles();
    return (
      <div className={classes.button}>
          <Link to={path} className={classes.link}>
              <Box display="flex" alignItems="center" padding="1em">
                  {icon}
                  {title}
              </Box>
          </Link>
      </div>
    );
};

export default NavItem;
