import React, { FC } from 'react';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export interface Props {
    children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      root: {
          position: 'fixed',
          bottom: theme.spacing(2),
          right: theme.spacing(2),
          flexGrow: 1,

      }
  }),
);

const ScrollTop: FC<Props> = ({ children }) => {
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
          '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'auto', block: 'center' });
        }
    };

    return (
      <Zoom in={trigger}>
          <div onClick={handleClick} role="presentation" className={classes.root}>
              {children}
          </div>
      </Zoom>
    );
};

export default ScrollTop;
