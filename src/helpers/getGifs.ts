import {api} from "../utils/request";
import {GifData, GifModel} from "../interfaces/models/gifModel";

export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${process.env.REACT_APP_API_KEY}`;

    const {data} = await api.get<GifModel>(url);

    const gifs = data.map((img: GifData) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });

    return gifs;
}
