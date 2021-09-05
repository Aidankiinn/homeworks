import React from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import QuoteItem from "../QuoteItem/QuoteItem";

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing(3),
    },
}));

const QuoteContent = ({quotes, categoryTitle}) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <Grid container direction='column' spacing={2}>
                <Grid item >
                    <Typography variant='h4'>{categoryTitle}</Typography>
                </Grid>
                {quotes.map(quote => (
                    <Grid item>
                        <QuoteItem text={quote.text} author={quote.author}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default QuoteContent;