import React from 'react';
import PropTypes from 'prop-types';

// Materail-UI
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import styles from './styles';
// -------

export class ContributorsRaw extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          contributors: [],
        };
      }

      componentDidMount() {
        fetch('https://api.github.com/repos/germmand/spend-jeff-bezos-money/contributors')
          .then(response => response.json())
          .then(contributors => this.setState({ contributors }));
      }

    render() {
        const { contributors } = this.state;
        const { classes } = this.props;
        return (
          <Paper className={classes.paper}>
            <Typography
              component="h3"
              variant="h5"
              align="center"
              color="textPrimary"
            >
                Contributors
            </Typography>
            <Grid
              container
              spacing={3}
              direction="row"
              justify="center"
              alignItems="center"
            >
              {contributors.map(contributor => (
                <Grid item xs={6} sm={4} md={2} key={contributor.id}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={contributor.avatar_url}
                    />
                    <CardContent>
                      <Typography component="p">
                        <Link href={contributor.html_url} target="_blank" rel="noreferrer">
                          {contributor.login}
                        </Link>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        )
    }
}


ContributorsRaw.propTypes = { 
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(ContributorsRaw);
