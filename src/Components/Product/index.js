import React from 'react';
import PropTypes from 'prop-types';

// Material-UI
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
// -------

export const ProductRaw = ({ classes, item }) => (
  <Card className={classes.card}>
    <CardMedia 
      image={item.image}
      title={item.name}
      className={classes.cardMedia}
    />
    <CardContent className={classes.cardContent}>
      <Typography variant="h5" component="h2">
        {item.name}
      </Typography>
      <Typography variant="h5" component="h2">
        {`$${item.price} USD`}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="medium" color="secondary">
          Sell
      </Button>
      <Input 
        className={classes.input}
        type="number"
        label="quantity"
        inputProps={{ shrink: 'True' }}
        margin="dense"
        placeholder="Quantity"
      />
      <Button size="medium" color="primary">
          Buy
      </Button>
    </CardActions>
  </Card>
);

ProductRaw.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default withStyles(styles)(ProductRaw);
