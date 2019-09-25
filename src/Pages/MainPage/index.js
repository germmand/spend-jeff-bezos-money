import React from 'react';

// Material-UI
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
// -------

import styles from './styles';

import Components from '../../Components';
const { 
  BezosHeader, 
  MoneyLeftWrapper,
  Product
} = Components;

const items = [{
    id: 1,
    name: 'Burger',
    price: 5,
    image: '/images/items/burger.jpg',
}, {
    id: 2,
    name: 'Book',
    price: 16,
    image: '/images/items/book.jpg',
}, {
    id: 3,
    name: 'Skateboard',
    price: 150,
    image: '/images/items/skateboard.jpg',
}, {
    id: 4,
    name: 'Gaming Console',
    price: 250,
    image: '/images/items/ps4.jpg',
}, {
    id: 5,
    name: 'Drone',
    price: 350,
    image: '/images/items/drone.jpg',
}, {
    id: 6,
    name: '4K TV',
    price: 900,
    image: '/images/items/4ktv.jpg',
}, {
    id: 7,
    name: 'Smartphone',
    price: 1000,
    image: '/images/items/smartphone.jpg',
}, {
    id: 8,
    name: 'Rolex',
    price: 9000,
    image: '/images/items/rolex.jpg',
}, {
    id: 9,
    name: 'Lamborghini',
    price: 200000,
    image: '/images/items/lamborghini.jpg',
}];

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
            {items.map(item => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Product item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      );
    }
}

export default withStyles(styles)(MainPage);
