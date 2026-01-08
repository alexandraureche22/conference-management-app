import api from './axios'
// Conferințe
export const getConferences = () => api.get('/conferences')
export const getConference = (id) => api.get(`/conferences/${id}`)
export const getConferencePapers = (id) => api.get(`/conferences/${id}/papers`)
export const createConference = (data) => api.post('/conferences', data)
export const updateConference = (id, data) =>
  api.put(`/conferences/${id}`, data)
