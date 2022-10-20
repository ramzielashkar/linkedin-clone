import { axiosInstance } from "../axios";
import {queryClient} from "../../App";
import { useQuery, useMutation} from "@tanstack/react-query";

export const getCompanyJobs= () => axiosInstance.get("/jobs").then((res) => res.data)

export const ALL_COMPANY_JOBS_KEY = ["ALL_COMPANY_JOBS_KEY"]

export const buildJobByIdKey = (id) => ["JOB_BY_ID:" , id]


export const useCompanyJobs = ({enabled}) => useQuery(
    {
        refetchOnWindowFocus:false,
        queryKey: ALL_COMPANY_JOBS_KEY,
        queryFn: () => getCompanyJobs(),
        placeholderData: { info : {} , results: []},
    
        staleTime: Infinity,
        enabled
    }
)