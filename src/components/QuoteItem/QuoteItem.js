import React from 'react';
import {Button, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    quotePaper: {
        padding: theme.spacing(2),
    }
}));

// if (Math.random() > 0.7) throw new Error('Well, this happened.');
const getError = () => {
    throw new Error('Well, this happened');
}
const QuoteItem = ({text, author}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.quotePaper}>
            <Typography variant='h6'>
                {text}
            </Typography>
            <Typography variant='subtitle1'>
                {author}
            </Typography>
            <Button onClick={getError} color={"primary"}>Click for an Error</Button>
        </Paper>
    );
};

export default QuoteItem;