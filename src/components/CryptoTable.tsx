import { useSelector } from "react-redux";
import { useFetchCryptoList } from "../hooks/useFetchCryptoList"
import { useNavigate } from "react-router-dom";

const CryptoTable = () => {
    const navigate=useNavigate()
    const {isLoading}=useFetchCryptoList();
    const cryptoList = useSelector((state:any ) => state.crypto.cryptoList);
    const error = useSelector((state: any) => state.crypto.error);

    const onCryptoClick=(id: string)=>navigate(`/cryptoDetails/${id}`)

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    
  return (
        <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    #
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Coin
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Price
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Percentage Change (24h)
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Market Cap
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Market Cap Change (24h)
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Total Volume
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    All Time High
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    All Time Low
                    </th>
                    
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                {Array.isArray(cryptoList)&&cryptoList?.map((crypto:any) => (
                    <tr key={crypto.id} className="cursor-pointer transition-colors duration-300 hover:bg-gray-100" onClick={()=>onCryptoClick(crypto.id)}>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{crypto.market_cap_rank}</td>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                        <div className="h-11 w-11 flex-shrink-0">
                            <img alt="" src={crypto.image} className="h-11 w-11 rounded-full" />
                        </div>
                        <div className="ml-4">
                            <div className="font-medium text-gray-900">{crypto.name}</div>
                        </div>
                        </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                        <div className="text-gray-900">${crypto.current_price}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {crypto.price_change_percentage_24h} %
                        </span>
                    </td>
                
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">${crypto.market_cap}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {crypto.market_cap_change_percentage_24h} %
                        </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">${crypto.total_volume}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">${crypto.ath}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">${crypto.atl}</td>



                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CryptoTable


  
   