import api from './axios'
<<<<<<< HEAD

export const submitPaper = (data) => {
  return api.post('/papers', data)
}
export const getPapers = () => api.get('/papers')

=======
// Lucrări
export const getPapers = () => api.get('/papers')
export const getPaper = (id) => api.get(`/papers/${id}`)
export const submitPaper = (data) => api.post('/papers', data)
export const updatePaper = (id, data) =>
  api.put(`/papers/${id}`, data)
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
export const resubmitPaper = (id, data) =>
  api.put(`/papers/${id}/resubmit`, data)
