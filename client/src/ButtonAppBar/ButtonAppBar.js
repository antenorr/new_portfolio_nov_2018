import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Hidden } from '@material-ui/core';

const styles = {
    root: {
        flexGrow: 1,
        background: "rgba(0,0,0,0.03)",
        color: "red"
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },

};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <Hidden smDown> 
            <div className={classes.root}>
                <AppBar position="static" className={classes.root}>
                    <Toolbar >
                 
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            My LOGO
                        </Typography>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Portfolio</Button>
                        <Button color="inherit">Blog</Button>
                        <Button color="inherit">Contact</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </Hidden>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);