import React from 'react';
import PropTypes from 'prop-types';

// Material-UI
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
// -------

import MoneyStringConverter from '../../Utils/MoneyStringConverter';

export const MoneyLeftWrapperRaw = ({ classes, moneyLeft }) => (
  <div className={classes.moneyWrapper}>
    <Typography component="h1" variant="h4" align="center" noWrap color="textPrimary">
      {`$${MoneyStringConverter(moneyLeft)} Left`}
    </Typography>
  </div>
);

MoneyLeftWrapperRaw.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    moneyLeft: PropTypes.number.isRequired,
};

export default withStyles(styles)(MoneyLeftWrapperRaw);
