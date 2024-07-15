import { useSelector } from "react-redux";
import { formatDistance } from 'date-fns';



const CryptoDataTable = () => {
    const {market_data} = useSelector((state: any) => state.crypto.cryptoData);
    const getRelativeTime = (timestamp: string) => {
        if(!timestamp)return
        const now = new Date();
        const date = new Date(timestamp);
        return formatDistance(date, now, { addSuffix: true, includeSeconds: true });
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
                Time Stamp
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Price
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Market Cap
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Total Volume
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Fully Diluted Valuation
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Market Cap fdv ratio
                </th>
                
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
            {Array.isArray(market_data)&&market_data?.map((obj:any,index: number) => (
                <tr key={index} className="cursor-pointer transition-colors duration-300 hover:bg-gray-100">
                <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{index+1}</td>
                <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{getRelativeTime(obj?.last_updated)}</td>
                <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">${obj?.current_price?.usd}</td>
                <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">${obj?.market_cap?.usd}</td>
                <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">${obj?.total_volume?.usd}</td>
                <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">${obj?.fully_diluted_valuation?.usd}</td>
                <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{obj?.market_cap_fdv_ratio}</td>


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

export default CryptoDataTable