export default () => ({
  root: {
    flexGrow: 1,
    paddingTop: '3%',
    margin: '0 auto',
    width: '70%',
    '@media (max-width: 750px)': {
      width: '100%'
    }
  },
  paper: {
    padding: '2%',
    marginTop: 15,
    marginBottom: 10
  },
  fullWidth: {
    width: '100%'
  }
});
