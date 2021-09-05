import React from 'react';
import {AppBar, Button, CssBaseline, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        '& a' : {
            color: 'inherit',
            textDecoration: 'none'
        }
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

const Layout = ({children}) => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/">Quotes</Link>
                    </Typography>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/add-quote"
                    >Add new quotes</Button>
                </Toolbar>
            </AppBar>
            <Toolbar/>
            {children}
        </>

    );
};

export default Layout;