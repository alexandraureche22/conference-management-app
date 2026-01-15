import axios from 'axios'
<<<<<<< HEAD

const api = axios.create({
  baseURL: 'http://localhost:3000',
=======
// Configurarea instanței Axios pentru a comunica cu backend-ul
const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
>>>>>>> f9d498c7ab122219e51236d9ebe1a69ca9ea3407
})

export default api
