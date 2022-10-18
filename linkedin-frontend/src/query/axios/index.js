import axios from "axios";
const token = localStorage.getItem('token');
export const axiosInstance = axios.create(
    {
        baseURL: "http://127.0.0.1:8000",
        headers:{
            'Authorization': `Bearer ${token}`,
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Headers': "*",
            'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE",
            'Access-Control-Allow-Credentials': true

        }
    }
)