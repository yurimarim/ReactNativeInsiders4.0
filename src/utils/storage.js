import AsyncStorage from '@react-native-async-storage/async-storage'

// Buscar os filmes salvos.
export async function getMoviesSaved(key) {
  const myMovies = await AsyncStorage.getItem(key)

  let moviesSave = JSON.parse(myMovies) || []
  return moviesSave
}

// Salvar um novo filme.
export async function saveMovie(key, newMovie) {
  let moviesStored = await getMoviesSaved(key)

  // Se tiver algum filme salvo com esse mesmo ID / ou duplicado, precisamos ignorar.
  // Função some, verifica se tem pelo menos UM item - retorna true or false
  const hasMovie = moviesStored.some(item => item.id === newMovie.id)

  if (hasMovie) {
    console.log('ESSE FILME JÁ EXISTE NA LISTA')
    return
  }

  moviesStored.push(newMovie)

  await AsyncStorage.setItem(key, JSON.stringify(moviesStored))
  console.log('FILME SALVO COM SUCESSO!')
}

// Deletar algum filme específico.
export async function deleteMovie(id) {
  let moviesStored = await getMoviesSaved('@prime-react')

  let myMovies = moviesStored.filter(item => {
    return item.id !== id
  })

  await AsyncStorage.setItem('@prime-react', JSON.stringify(myMovies))
  console.log('FILME DELETADO COM SUCESSO')
  return myMovies
}

// Filtrar algum filme se já está salvo.
export async function hasMovie(movie) {
  let moviesStored = await getMoviesSaved('@prime-react')

  const hasMovie = moviesStored.find(item => item.id === movie.id)

  if (hasMovie) {
    return true
  }

  return false
}
