import api from './axios'

export const getReviewers = () => api.get('/users/reviewers')
