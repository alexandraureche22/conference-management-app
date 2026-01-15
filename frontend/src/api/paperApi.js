import api from './axios'

export const submitPaper = (data) => {
  return api.post('/papers', data)
}
export const getPapers = () => api.get('/papers')

export const resubmitPaper = (id, data) =>
  api.put(`/papers/${id}/resubmit`, data)
