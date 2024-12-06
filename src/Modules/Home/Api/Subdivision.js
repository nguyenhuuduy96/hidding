import axios from "axios";

export const ins = axios.create({
    baseURL: 'http://localhost:3000',
})


export const getAll = () => {
   return ins.get('/Subdivision')
}