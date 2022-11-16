import axios, {AxiosResponse} from "axios"

// create axios instance
const http = axios.create({
    headers:{
        "Content-Type": "application/json"
    } 
});

export { http };
export type { AxiosResponse };

