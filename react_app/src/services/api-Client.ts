import axios from "axios"
import { CanceledError ,AxiosError } from "axios"
export const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    
})



export { CanceledError,AxiosError };