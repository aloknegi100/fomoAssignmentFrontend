import { useParams } from "react-router-dom";
import { useFetchCryptoData } from "../hooks/useFetchCryptoList";
import { useSelector } from 'react-redux';
import CryptoDataTable from "../components/CryptoDataTable";
import PriceHistoryGraph from "../components/PriceHistoryGraph";

const CryptoDetails = () => {
    const {id:crypto}=useParams()
    const {isLoading}=useFetchCryptoData(crypto)


    const cryptoData = useSelector((state: any) => state.crypto.cryptoData);
    const error = useSelector((state: any) => state.crypto.error);


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
 
 
    return (
    <div>
      <div className="m-auto p-7 gap-x-16 flex mt-24 ">
        <div className="w-1/3 space-y-8">
          <div className="flex space-x-8 items-center">
            <p className=" text-gray-800">Cryptocurrencies</p>
            <p className="text-gray-500">/</p>
            <p className=" text-gray-500">{cryptoData?.name} Price</p>
          </div>
          <div className="space-y-4">
            <div className="flex space-x-3 items-center">
              <img className="h-8 w-8 rounded-full" src={"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}/>
              <h1 className="text-xl font-semibold text-gray-800">{cryptoData?.name}</h1>
              <p className="text-lg text-gray-500">{cryptoData?.symbol?.toUpperCase()} Price</p>
              <p className="text-gray-700 text-xs bg-gray-100 rounded-xl px-2 py-1">#{cryptoData?.market_data?.[0]?.market_cap_rank}</p>
            </div>
            <div className="flex space-x-4 items-center">
              <p className="font-semibold text-4xl">${cryptoData?.market_data?.[0]?.current_price?.usd}</p>
              <p className="text-green-600 font-semibold text-2xl">{cryptoData?.market_data?.[0]?.price_change_percentage_24h?.toFixed(2)}%</p>
              <p></p>
            </div>
            <div className="flex items-center space-x-4 text-sm">
                <p className="text-gray-400">{cryptoData?.market_data?.[0]?.current_price?.usd} BTC</p>
                <p className="text-green-600">0.0%</p>
            </div>
          </div>
          <div className="space-y-3">
                <div className="flex justify-between">
                    <p className="text-gray-500">Market Cap</p>
                    <p className="text-gray-800 font-medium">${cryptoData?.market_data?.[0]?.market_cap?.usd}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-500">Fully Diluted Valuation</p>
                    <p className="text-gray-800 font-medium">${cryptoData?.market_data?.[0]?.fully_diluted_valuation?.usd}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-500">24 Hour Trading Vol </p>
                    <p className="text-gray-800 font-medium">${cryptoData?.market_data?.[0]?.total_volume?.usd}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-500">Circulating Supply</p>
                    <p className="text-gray-800 font-medium">{cryptoData?.market_data?.[0]?.circulating_supply}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-500">Total Supply</p>
                    <p className="text-gray-800 font-medium">{cryptoData?.market_data?.[0]?.total_supply}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-500">Max Supply</p>
                    <p className="text-gray-800 font-medium">{cryptoData?.market_data?.[0]?.max_supply??'∞'}</p>
                </div>
          </div>
        </div>
        <div className="w-2/3 mt-16">
        <PriceHistoryGraph/>
        </div>
      </div>
      {cryptoData&&<CryptoDataTable/>}
    </div>
  );
};
 
export default CryptoDetails;