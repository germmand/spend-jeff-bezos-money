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

import MoneyStringConverter from '../../Utils/MoneyStringConverter';

export class ProductRaw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  // Since setState is asyncronous, this method is always called in the setState's callback.
  // So that this.state.quantity will hold the correct updated value when we call onTradedItem.
  onProductUpdated = () => {
    const { item, onTradedItem } = this.props;
    const { quantity } = this.state;
    const itemTraded = {
        ...item,
        quantity,
    };
    onTradedItem(itemTraded);
  };

  onChangeQuantity = event => {
    if( event.target.value > 0 ) {
      this.setState({
        quantity: Number(event.target.value),
      }, this.onProductUpdated);
    }
  };

  onButtonClick = (value) => () => {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity + value,
    }, this.onProductUpdated);
  };

  render() {
    const { classes, item } = this.props;
    const { quantity } = this.state;
    const enableSellButton = quantity === 0;
    return (
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
            {`$${MoneyStringConverter(item.price)} USD`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            size="medium" 
            color="secondary" 
            onClick={this.onButtonClick(-1)} 
            disabled={enableSellButton}
          >
              Sell
          </Button>
          <Input 
            className={classes.input}
            type="number"
            label="quantity"
            inputProps={{ shrink: 'True' }}
            margin="dense"
            placeholder="Quantity"
            value={quantity}
            onChange={this.onChangeQuantity}
          />
          <Button 
            size="medium" 
            color="primary" 
            onClick={this.onButtonClick(1)}
          >
              Buy
          </Button>
        </CardActions>
      </Card>
    );
  }
};

ProductRaw.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    onTradedItem: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProductRaw);
