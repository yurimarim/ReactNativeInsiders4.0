import axios from 'axios'

//URL FILMES EM CARTAZ
//  &language=pt-br&page=1

export const key = // your key

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api
