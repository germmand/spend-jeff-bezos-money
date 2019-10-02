import React from 'react';
import PropTypes from 'prop-types';

// Material-UI
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// -------

import styles from './styles';

import products from '../../Products';

import Components from '../../Components';

const { 
  BezosHeader, 
  MoneyLeftWrapper,
  Product,
  TradedItem,
} = Components;

// We export it for the unit tests.
export const BEZOS_NET_WORTH = 120000000000000;

export class MainPageRaw extends React.Component {     
    constructor(props) {
      super(props);
      this.state = {
        moneyLeft: BEZOS_NET_WORTH,
        tradedItems: [],
      };
    }

    onComputeMoneyLeft = () => {
        const { tradedItems } = this.state;
        let totalMoneySpent = 0;
        for(let i = 0; i < tradedItems.length; i += 1) {
            totalMoneySpent += tradedItems[i].price * tradedItems[i].quantity;
        }
        this.setState({
            moneyLeft: BEZOS_NET_WORTH - totalMoneySpent,
        });
    }

    onTradedItem = (item) => {
        const { tradedItems } = this.state;
        const index = tradedItems.findIndex(element => element.id === item.id);
        if (index === -1) {
            // Pushing to the array is performed like this here to maintain immutability.
            // Same thing goes for updating an element. 
            // That's why it's done like that in the 'else' statements.
            this.setState({
                tradedItems: [...tradedItems, item],
            }, this.onComputeMoneyLeft);
        } else if (item.quantity !== 0) {
            // We check if the quantity is zero so that we can determine if we can remove it from the array altogether.
            // Because we use tradedItems to render the bought products at the bottom and we don't want it to render something like:
            // "zero items bought of 'x'".
            this.setState({
                tradedItems: [
                    ...tradedItems.slice(0, index), 
                    item,
                    ...tradedItems.slice(index + 1)
                ],
            }, this.onComputeMoneyLeft);
        } else {
            this.setState({
                tradedItems: [
                    ...tradedItems.slice(0, index), 
                    ...tradedItems.slice(index + 1)
                ],
            }, this.onComputeMoneyLeft);
        }
    };

    render() {
      const { classes } = this.props;
      const { moneyLeft, tradedItems } = this.state;
      return (
        <div className={classes.root}>
          <BezosHeader />
          <MoneyLeftWrapper moneyLeft={moneyLeft} />
          {/* Items */}
          <Grid container spacing={4}>
            {products.map(product => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Product item={product} onTradedItem={this.onTradedItem} />
              </Grid>
            ))}
          </Grid>
          {/* Traded Items */}
          <Paper className={classes.paper}>
            <Grid 
              container
              spacing={3}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Typography
                  component="h3"
                  variant="h5"
                  align="center"
                  color="textPrimary"
                >
                  Your Shopping Cart
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.fullWidth}>
                <Grid container>
                  {tradedItems.map(tradedItem => (
                    <Grid item xs={12} sm={6} md={3} key={tradedItem.id}>
                      <TradedItem item={tradedItem} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      );
    }
}

MainPageRaw.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(MainPageRaw);
