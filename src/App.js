import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: 10,
        width: 150,
        height: 150,
    },
    root: {
        flexGrow: 1,
        paddingTop: '3%',
        margin: '0 auto',
        width: '70%',
    },
    paper: {
        paddingTop: '3%',
        paddingBottom: '3%',
    },
    moneyWrapper: {
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        position: 'sticky',
        top: 0,
        background: theme.palette.primary.main,
        flexGrow: 1,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardMedia: {
        paddingTop: '56.25%', //16:9
        width: '100%',
    },
    cardContent: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

const items = [{
    name: 'Burger',
    price: 5,
    image: '/images/items/burger.jpg',
}];

function App() {
  const classes = useStyles();

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

export default App;
