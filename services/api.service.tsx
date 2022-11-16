import { Version } from "../types/version.type"
import {AxiosResponse, http} from "./http.service"

export async function getAPIVersion(): Promise<AxiosResponse<Version>>{

    return await http.get<Version>("https://api.codingthailand.com/api/version")
    
}