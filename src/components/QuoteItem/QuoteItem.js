import React from 'react';
import {makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    quotePaper: {
        padding: theme.spacing(2),
    }
}));

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
        </Paper>
    );
};

export default QuoteItem;