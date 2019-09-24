export default theme => ({
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
});
