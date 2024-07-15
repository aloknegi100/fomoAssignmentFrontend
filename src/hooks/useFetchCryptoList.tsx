import { useQuery } from "react-query"
import { fetchCryptoDataApi, fetchCryptoListApi } from "../services/api"
import { useDispatch } from "react-redux";
import { setCryptoData, setCryptoList, setError } from "../redux/slices/cryptoSlice";

export const useFetchCryptoList = () => {
    const dispatch = useDispatch();

    return useQuery({
        queryFn : fetchCryptoListApi,
        queryKey : ["getCryptoList"],
        onSuccess: (data:any) => {
            if(data.data.success===false)
            {
                dispatch(setError(data.data?.message));
                return     
            }
            dispatch(setCryptoList(data.data));
            dispatch(setError(null));
        },
        onError: (error:any) => {
            dispatch(setError(error?.message));
        },
    });
}

export const useFetchCryptoData = (crypto:string|undefined) => {
    const dispatch = useDispatch();

    return useQuery({
        queryFn : ()=>fetchCryptoDataApi(crypto),
        queryKey : ["getCryptoData"],
        onSuccess: (data:any) => {
            if(data.data.success===false)
            {
                dispatch(setError(data.data?.message));
                return     
            }
            dispatch(setCryptoData(data.data));
            dispatch(setError(null));
        },
        onError: (error:any) => {
            dispatch(setError(error?.message));
        },
    });
}