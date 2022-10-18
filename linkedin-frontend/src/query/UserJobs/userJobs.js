import { axiosInstance } from "../axios";
import {queryClient} from "../../App";
import { useQuery, useMutation} from "@tanstack/react-query";

export const getJobs= () => axiosInstance.get("/user/job").then((res) => res.data)

export const ALL_JOBS_KEY = ["ALL_JOBS_KEY"]

export const buildJobByIdKey = (id) => ["JOB_BY_ID:" , id]


export const useJobs = ({enabled}) => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_JOBS_KEY,
        queryFn: () => getJobs(),
        placeholderData: { info : {} , results: []},
        // On success or when data is retrieved create keys for each episode alone
    
        staleTime: Infinity,
        enabled
    }
)