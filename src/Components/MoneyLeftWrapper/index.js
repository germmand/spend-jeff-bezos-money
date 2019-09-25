import React from 'react';

// Material-UI
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
// -------

export const MoneyLeftWrapper = ({ classes }) => (
  <div className={classes.moneyWrapper}>
    <Typography component="h1" variant="h4" align="center" noWrap color="textPrimary">
      $120,000,000,000,000 Left
    </Typography>
  </div>
);

export default withStyles(styles)(MoneyLeftWrapper);
