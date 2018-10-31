import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import withWidth from '@material-ui/core/withWidth';
import { Hidden } from '@material-ui/core';

const styles = {
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        borderTop: "1px solid #ddd",
    },
};

class LabelBottomNavigation extends React.Component {
    state = {
        value: 'recents',
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <Hidden mdUp> 
                <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
                    <BottomNavigationAction label="Home" value="recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Portfolio" value="favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Blog" value="nearby" icon={<LocationOnIcon />} />
                    <BottomNavigationAction label="Contact" value="folder" icon={<Icon>folder</Icon>} />
                </BottomNavigation>
            </Hidden>

        );
    }
}

LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);