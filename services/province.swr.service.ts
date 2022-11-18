import useSWR from "swr";
import { Province } from "../models/province.model";

//use SWR
export function useGetProvince() {
    const { data, error } = useSWR<Province[], Error>(`/api/province/`);
  
    return {
      province: data,
      isLoading: !error && !data,
      isError: error
    }
}
