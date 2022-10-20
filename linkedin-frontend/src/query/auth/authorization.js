import { axiosInstance } from "../axios";
import {queryClient} from "../../App";
import { useQuery, useMutation} from "@tanstack/react-query";

export const registerUser = async (data) => {
    return await axiosInstance.post("auth/signup", data);
}

export const loginUser = async (data)=>{
    return await axiosInstance.post("auth/login", data);
}