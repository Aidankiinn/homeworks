import React from 'react';
import {List, ListItem, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import {CATEGORIES} from "../../constants";

const MenuList = () => {
    return (
        <List>
            <ListItem button key='all' component={Link} to='/'>
                <ListItemText primary='All' />
            </ListItem>
            {CATEGORIES.map(category => (
                <ListItem button key={category.id} component={Link} to={'/quotes/' + category.id}>
                    <ListItemText primary={category.title} />
                </ListItem>
            ))}
        </List>
    );
};

export default MenuList;