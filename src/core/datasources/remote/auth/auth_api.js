import axios from 'axios'

export const authApi = axios.create({
    baseURL:'http://localhost:5005',
    //se puede enviar header con token para cada petición pero lo vamos a manejar con cookies
    withCredentials: true,
})