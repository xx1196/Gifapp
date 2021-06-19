import {Fragment, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        }
    }),
);


const App = () => {
    const [categories, setCategories] = useState([
        'One punch',
    ]);
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline/>
            <Container fixed>
                <Typography align="center" component="h2" style={
                    {
                        backgroundColor: '#cfe8fc',
                        padding: '60px',
                    }
                }>
                    Gif app
                </Typography>

                <AddCategory setCategories={setCategories}/>

                <List className={classes.root}>
                    {
                        categories.map((category) => <GifGrid key={category} category={category}/>)
                    }
                </List>
            </Container>
        </Fragment>
    );
}

export default App;
