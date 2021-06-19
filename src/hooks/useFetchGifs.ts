import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then(imgs => setState({
            // @ts-ignore
            data: imgs,
            loading: false
        }))
    }, [category]);

    return state;
}
