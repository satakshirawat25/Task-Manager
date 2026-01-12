
import { BASE_URL } from './apiPaths'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:BASE_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
    },

})

//Request interceptor
axiosInstance.interceptors.request.use((config)=>{
    const accessToken = localStorage.getItem("token")
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
},(error)=>{
    return Promise.reject(error)
}
)

//response interceptor
axiosInstance.interceptors.response.use(
    (response)=>{
        return response
    },
    (error)=>{
        //hanle common errors
       
        if(error.response){

           
           
            if(error.response.status===401){
                //Redirect to login page
                window.location.href = '/login';
            }else if(error.response.status===501){
                 console.error("Server error")
            
               
            }
        }else if (error.code==="ECONABORTED"){
            console.error("Request timeout")
        }
        return Promise.reject(error)
    }
)
export default axiosInstance