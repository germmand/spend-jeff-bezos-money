import React from 'react';
import PropTypes from 'prop-types';

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

// We disable eslint here to stop complaining about writing it as a pure function.
// Since we're gonna need it like this later.
// And I'm lazy enough to change it later I'll do it like this rn.
// eslint-disable-next-line react/prefer-stateless-function
export class MainPageRaw extends React.Component {     
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <BezosHeader />
          <MoneyLeftWrapper moneyLeft={120000000000000} />
          {/* Items */}
          <Grid container spacing={4}>
            {products.map(product => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Product item={product} onTradedItem={() => {}} />
              </Grid>
            ))}
          </Grid>
        </div>
      );
    }
}

MainPageRaw.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(MainPageRaw);
