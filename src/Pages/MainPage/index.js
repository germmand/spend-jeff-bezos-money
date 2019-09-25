import React from 'react';

// Material-UI
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
// -------

import styles from './styles';

const items = [{
    name: 'Burger',
    price: 5,
    image: '/images/items/burger.jpg',
}, {
    name: 'Book',
    price: 16,
    image: '/images/items/book.jpg',
}, {
    name: 'Skateboard',
    price: 150,
    image: '/images/items/skateboard.jpg',
}, {
    name: 'Gaming Console',
    price: 250,
    image: '/images/items/ps4.jpg',
}, {
    name: 'Drone',
    price: 350,
    image: '/images/items/drone.jpg',
}, {
    name: '4K TV',
    price: 900,
    image: '/images/items/4ktv.jpg',
}, {
    name: 'Smartphone',
    price: 1000,
    image: '/images/items/smartphone.jpg',
}, {
    name: 'Rolex',
    price: 9000,
    image: '/images/items/rolex.jpg',
}, {
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
          {/* Jeff Bezos Header */}
          <Paper className={classes.paper}>
            <Grid
              container
              spacing={3}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Avatar alt="Jeff Bezos" src="/images/bezos.jpg" className={classes.avatar} />
              </Grid>
              <Grid item xs={12}>
                <Typography component="h1" variant="h4" align="center" color="textPrimary">
                  Spend Jeff Bezos&apos; Money
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          {/* Jeff Bezos' money */}
          <div className={classes.moneyWrapper}>
            <Typography component="h1" variant="h4" align="center" noWrap color="textPrimary">
              $120,000,000,000,000 Left
            </Typography>
          </div>
          {/* Items */}
          <Grid container spacing={4}>
            {items.map(item => (
              <Grid item key={item} xs={12} sm={6} md={4}>
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
                      inputProps={{ shrink: true, textAlign: 'center' }}
                      margin="normal"
                      placeholder="Quantity"
                    />
                    <Button size="medium" color="primary">
                      Buy
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      );
    }
}

export default withStyles(styles)(MainPage);
