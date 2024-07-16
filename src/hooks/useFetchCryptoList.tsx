import { useQuery } from "react-query"
import { fetchCryptoDataApi, fetchCryptoListApi, fetchPriceHistoryApi } from "../services/api"
import { useDispatch } from "react-redux";
import { setCryptoData, setCryptoList, setError, setPriceHistory } from "../redux/slices/cryptoSlice";

export const useFetchCryptoList = () => {
    const dispatch = useDispatch();

    return useQuery({
        queryFn : fetchCryptoListApi,
        queryKey : ["getCryptoList"],
        refetchInterval:30000,
        staleTime:30000,
        onSuccess: (data:any) => {
            console.log("data",data);
            if(data.data.success===false)
            {
                dispatch(setError(data?.data?.message+". Please Try again after 30 seconds(Coin Gecko API Rate limit error)"));
                return     
            }
            dispatch(setCryptoList(data.data));
            dispatch(setError(null));
        },
        onError: (error:any) => {
            console.log("errror",error);
            
            dispatch(setError(error?.message));
        },
    });
}

export const useFetchPriceHistory = (crypto:string|undefined) => {
    const dispatch = useDispatch();

    return useQuery({
        queryFn : ()=>fetchPriceHistoryApi(crypto),
        queryKey : ["getPriceHistory",crypto],
        refetchInterval:30000,
        staleTime:30000,
        onSuccess: (data:any) => {         
               
            if(data.success===false)
            {
                dispatch(setError(data?.message+". Please Try again after 30 seconds(Coin Gecko API Rate limit error)"));
                return     
            }
            dispatch(setPriceHistory(data.data));
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
        queryKey : ["getCryptoData",crypto],
        refetchInterval:30000,
        staleTime:30000,
        onSuccess: (data:any) => {

            if(data.success===false)
            {                
                dispatch(setError(data?.message+". Please Try again after 30 seconds(Coin Gecko API Rate limit error)"));
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