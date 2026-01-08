import axios from 'axios'
// Configurarea instanței Axios pentru a comunica cu backend-ul
const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
