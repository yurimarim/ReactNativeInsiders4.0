import axios from 'axios'

//URL FILMES EM CARTAZ
//  &language=pt-br&page=1

export const key = 'db5b237748f20ac70ccace5223d37034'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api
