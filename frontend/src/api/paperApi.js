import api from './axios'

export const getPapers = () => api.get('/papers')
export const getPaper = (id) => api.get(`/papers/${id}`)
export const submitPaper = (data) => api.post('/papers', data)
export const updatePaper = (id, data) =>
  api.put(`/papers/${id}`, data)
export const resubmitPaper = (id, data) =>
  api.put(`/papers/${id}/resubmit`, data)
