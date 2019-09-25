import React from 'react';

// Materail-UI
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// -------

export const BezosHeader = ({ classes }) => (
  <Paper className={classes.paper}>
    <Grid
      container
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Avatar alt="Jeff Bezos" src="/images/bezos.jpg" className={classes.avatar} />
      </Grid>
      <Grid item xs={12}>
        <Typography component="h1" variant="h4" align="center" color="textPrimary">
          Spend Jeff Bezos&apos; Money
        </Typography>
      </Grid>
    </Grid>
  </Paper>
);

export default withStyles(styles)(BezosHeader);
