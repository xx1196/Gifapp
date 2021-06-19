import {ChangeEvent, FC, FormEvent, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";
import {AddCategoryProps} from "../interfaces/props";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        input: {
            fontSize: '1.3rem',
            width: '100%',
            color: 'grey'
        }
    }),
);

const AddCategory: FC<AddCategoryProps> = ({setCategories}): JSX.Element => {
    const classes = useStyles();

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories((categories: Array<String>) => [inputValue, ...categories]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <TextField className={classes.input} id="outlined-basic" label="Outlined" variant="outlined"
                       value={inputValue}
                       onChange={handleInputValue}/>
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
export default AddCategory;
