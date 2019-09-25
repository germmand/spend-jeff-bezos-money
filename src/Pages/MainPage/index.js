import React from 'react';

// Material-UI
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
// -------

import styles from './styles';

import products from '../../Products';

import Components from '../../Components';
const { 
  BezosHeader, 
  MoneyLeftWrapper,
  Product
} = Components;


export class MainPage extends React.Component {
    state = {
    };

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <BezosHeader />
          <MoneyLeftWrapper />
          {/* Items */}
          <Grid container spacing={4}>
            {products.map(product => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Product item={product} />
              </Grid>
            ))}
          </Grid>
        </div>
      );
    }
}

export default withStyles(styles)(MainPage);
