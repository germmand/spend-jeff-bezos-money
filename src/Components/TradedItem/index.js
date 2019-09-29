import React from 'react';
import PropTypes from 'prop-types';

// Material-UI
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
// -------

export const TradedItemRaw = ({ item, classes }) => (
  <div className={classes.container}>
    <Avatar src={item.image} alt={item.name} className={classes.productImage} />
    <Typography variant="h5" component="h5" color="textPrimary">
      {item.name}
      {' '}
x
      {item.quantity}
    </Typography>
  </div>
);

TradedItemRaw.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
};

export default withStyles(styles)(TradedItemRaw);
