import React, {useState} from 'react';
import {Button, Grid, makeStyles, MenuItem, Paper, TextField, Typography} from "@material-ui/core";
import axiosApi from "../../axiosApi";
import {CATEGORIES} from "../../constants";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
    }
}))
const AddQuote = ({history}) => {
    const classes = useStyles();

    const [quote, setQuote] = useState({
        category: '',
        author: '',
        text: '',
    });

    const onInputChange = e => {
        const {name, value} = e.target;
        setQuote(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const addQuote = async (e) => {
        e.preventDefault();
        await axiosApi.post('/quote.json', {...quote});
        history.push('/');
    }

    return (
        <Grid container direction='column' spacing={2} className={classes.root}>
            <Grid item>
                <Typography variant="h4">Add new Quote</Typography>
            </Grid>
            <Grid item>
                <Paper className={classes.paper}>
                    <Grid spacing={2} container direction='column' component='form' onSubmit={addQuote}>
                        <Grid item>
                            <TextField
                                required
                                select
                                label='Category'
                                value={quote.category}
                                onChange={onInputChange}
                                fullWidth
                                variant='outlined'
                                name='category'
                            >
                                {CATEGORIES.map(category => (
                                    <MenuItem key={category.id} value={category.id}>{category.title}</MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                label='Quote Author'
                                value={quote.author}
                                onChange={onInputChange}
                                fullWidth
                                variant='outlined'
                                name='author'
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                multiline
                                minRows={3}
                                label='Quote text'
                                value={quote.text}
                                onChange={onInputChange}
                                fullWidth
                                variant='outlined'
                                name='text'
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant='outlined'
                                color='primary'
                                type='submit'
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AddQuote;