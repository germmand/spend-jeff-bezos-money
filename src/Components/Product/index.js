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
      toBuyquantity: 0,
      isBuyButtonDisabled: false
    };
  }

  /* When components are updated we need to check if the user has enough money
left to buy items. If they don't have enough money for that item we disable the
buy button for that item.
*/

  componentWillUpdate(prevProps) {
    const { item, moneyLeft } = this.props;
    if (prevProps.moneyLeft !== moneyLeft) {
      if (prevProps.moneyLeft < item.price) {
        this.setState({
          isBuyButtonDisabled: true
        });
      } else {
        this.setState({
          isBuyButtonDisabled: false
        });
      }
    }
  }

  // Since setState is asyncronous, this method is always called in the setState's callback.
  // So that this.state.quantity will hold the correct updated value when we call onTradedItem.
  onProductUpdated = () => {
    const { item, onTradedItem } = this.props;
    const { quantity } = this.state;
    const itemTraded = {
      ...item,
      quantity
    };
    onTradedItem(itemTraded);
  };

  onChangeQuantity = event => {
    const { item, moneyLeft } = this.props;
    if (moneyLeft >= Number(event.target.value) * item.price) {
      this.setState({
        // We need to parse to Number otherwise it'll be appended as a string.
        // So when a button is clicked, the '1' will be appended at the end as a string
        // rather than add it as a sum.
        toBuyquantity: Number(event.target.value)
      });
    } else if (moneyLeft < Number(event.target.value) * item.price) {
      if (moneyLeft / item.price < 1) {
        this.setState({
          // We need to parse to Number otherwise it'll be appended as a string.
          // So when a button is clicked, the '1' will be appended at the end as a string
          // rather than add it as a sum.
          toBuyquantity: Number(0)
        });
      } else {
        this.setState({
          /* We need to parse to Number otherwise it'll be appended as a string.
           So when a button is clicked, the '1' will be appended at the end as a string
           rather than add it as a sum.
          We use the .floor function because we need to ensure the user cannot buy
          fractions of a unit.
          */
          toBuyquantity: Number(Math.floor(moneyLeft / item.price))
        });
      }
    }
  };

  onButtonBuy = event => () => {
    const { quantity, toBuyquantity } = this.state;
    this.setState(
      {
        quantity: toBuyquantity + quantity
      },
      this.onProductUpdated
    );
  };

  /* When the sell button is clicked we need to ensure tthe user cannot sell
 more than they have.
This function makes sure the user cannot create negative cart values
*/
  onButtonSell = event => () => {
    const { quantity, toBuyquantity } = this.state;
    if (quantity - toBuyquantity < 0) {
      this.setState(
        {
          quantity: 0
        },
        this.onProductUpdated
      );
    } else {
      this.setState(
        {
          quantity: quantity - toBuyquantity
        },
        this.onProductUpdated
      );
    }
  };

  render() {
    const { classes, item } = this.props;
    const { quantity, toBuyquantity, isBuyButtonDisabled } = this.state;
    const enableSellButton = quantity === 0;

    return (
      <Card className={classes.card}>
        <CardMedia image={item.image} title={item.name} className={classes.cardMedia} />
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
            onClick={this.onButtonSell()}
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
            value={toBuyquantity}
            onChange={this.onChangeQuantity}
          />
          <Button
            size="medium"
            color="primary"
            onClick={this.onButtonBuy()}
            disabled={isBuyButtonDisabled}
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    );
  }
}

ProductRaw.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  onTradedItem: PropTypes.func.isRequired,
  moneyLeft: PropTypes.number.isRequired
};

export default withStyles(styles)(ProductRaw);
