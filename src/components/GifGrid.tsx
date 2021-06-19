import {FC, Fragment} from "react";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import {GifData} from "../interfaces/models/gifModel";
import GifGridItem from "./GifGridItem";
import {GifGridProps} from "../interfaces/props";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useFetchGifs} from "../hooks/useFetchGifs";
import LoaderOverlay from "./loaderOverlay";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }
    }),
);

const GifGrid: FC<GifGridProps> = ({category}): JSX.Element => {
    const classes = useStyles();

    const {data: images, loading} = useFetchGifs(category);

    return (
        <Fragment>
            <Typography gutterBottom component="h1">
                {category}
            </Typography>
            <LoaderOverlay loading={loading}/>
            <ListItem className={classes.root}>
                {
                    images.map(({id, url, title}: GifData) =>
                        <GifGridItem key={id}
                                     url={url}
                                     title={title}
                        />
                    )
                }
            </ListItem>
        </Fragment>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

export default GifGrid;
