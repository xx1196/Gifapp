import React, {FC} from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import {makeStyles, Theme} from "@material-ui/core/styles";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {LoaderOverlayProps} from "../interfaces/props";

const componentStyles = (theme: Theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
});

const useStyles = makeStyles(componentStyles);

const LoaderOverlay: FC<LoaderOverlayProps> = ({loading}): JSX.Element => {

    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="primary"/>
        </Backdrop>
    );
}


LoaderOverlay.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default LoaderOverlay;
