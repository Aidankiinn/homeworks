import React, {useState} from 'react';
import {Backdrop, CircularProgress, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const withLoader = (WrappedComponent, axios) => {
    return function WithLoaderHOC(props) {
        const classes = useStyles();

        const [open, setOpen] = useState(false);

        axios.interceptors.request.use(req => {
            setOpen(true);
            return req;
        });

        axios.interceptors.response.use(res => {
            setOpen(false);
            return res;
        });

        const closeBackdrop = () => {
            setOpen(false);
        };

        return (
            <>
                <Backdrop className={classes.backdrop} open={open} onClick={closeBackdrop}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
                <WrappedComponent {...props}/>
            </>
        );
    };
};

export default withLoader;