import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import {CATEGORIES} from "../../constants";
import axiosApi from "../../axiosApi";
import Menu from "../../components/Menu/Menu";
import QuoteContent from "../../components/QuoteContent/QuoteContent";
import withLoader from "../../hoc/withLoader";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));


const Quotes = ({match}) => {
    const classes = useStyles();

    const [quotes, setQuotes] = useState([]);

    const category = match.params.category;

    useEffect(() => {
        const fetchData = async () => {
            let url = '/quotes.json'

            if (category) {
                url += `?orderBy="category"&equalTo="${category}"`
            }

            const response = await axiosApi.get(url);
            const quotes = Object.keys(response.data).map(id => ({
                ...response.data[id],
                id
            }));
            setQuotes(quotes);
        }

        fetchData().catch(console.error);
    }, [match.params.category]);

    const getCategoryName = () => {
        if (!category) {
            return 'All';
        }

        const title = CATEGORIES.find(c => c.id === category);
        return title ? title.title : 'NotFound';
    }
    return (
        <div className={classes.root}>
            <Menu/>
            <QuoteContent quotes={quotes} categoryTitle={getCategoryName()}/>
        </div>
    );
};

export default withLoader(Quotes, axiosApi);