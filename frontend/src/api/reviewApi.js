import api from './axios'

export const getReviews = () => api.get('/reviews')
export const getReviewsByPaper = (paperId) =>
  api.get(`/reviews/paper/${paperId}`)
export const updateReview = (id, data) =>
  api.put(`/reviews/${id}`, data)
