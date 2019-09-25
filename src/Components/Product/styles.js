export default theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
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
