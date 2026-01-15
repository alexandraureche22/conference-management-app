import api from './axios'

export const getAuthors = () => {
  return api.get('/users/authors')
}

export const createAuthor = (data) => {
  return api.post('/users/authors', data)
}
