import {FC} from "react";
import {GifGridItemProps} from "../interfaces/props";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: 10,
            marginRight: 10,
            marginTop: 10,
            alignContent: 'center',
            border: '1px solid grey',
            borderRadius: 6,
            overflow: 'hidden',
        },
        media: {
            height: 140,
        },
    }),
);

const GifGridItem: FC<GifGridItemProps> = ({url, title}): JSX.Element => {
    const classes = useStyles();

    return (
        <div>
            <ListItemAvatar>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={url}
                            title={title}
                        />
                        <CardContent>
                            <Typography gutterBottom component="h1">
                                {title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ListItemAvatar>
        </div>
    )
}

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default GifGridItem;
