import axios from "./axios"
import { Anime, ListResponse } from '../interfaces'

const getAllAnime = async (): Promise<ListResponse<Anime>> => {
    try {
        const res = await axios.get(`/anime`)
        return res.data
    } catch (e) {
        console.log(e);
    }
}

export  {
    getAllAnime
}