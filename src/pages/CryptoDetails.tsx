import { useParams } from "react-router-dom";
import { useFetchCryptoData } from "../hooks/useFetchCryptoList";
import { useSelector } from 'react-redux';

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
 
    const cards = [
        {
            heading: "Market Cap",
            price: "12321,32321,34"
        },
        {
            heading: "gwfuyefdsbsadwfwefewfw ",
            price: "324324,32"
        },
        {
            heading: "Market Cap",
            price: "12321,32321,342443"
        },
        {
            heading: "gwfuyefdsfhweg",
            price: "324324,324"
        },
        {
            heading: "Market Cap",
            price: "12321,323"
        },
        {
            heading: "gwfuyefdsb dsbfhwegf",
            price: "324324,324432"
        },
        {
            heading: "Market Cap",
            price: "12321,323"
        },
        {
            heading: "gwfuyefdsb dsbfhwegf",
            price: "324324,324432"
        },
    ]

 
    return (
    <div className="">
      <div className="m-auto  w-9/12 gap-x-12 flex mt-24 ">
        <div className="w-1/3 space-y-8">
          <div className="flex space-x-8 items-center">
            <p className=" text-gray-800">Cryptocurrencies</p>
            <p className="text-gray-500">/</p>
            <p className=" text-gray-500">{cryptoData.name} Price</p>
          </div>
          <div className="space-y-4">
            <div className="flex space-x-3 items-center">
              <img className="h-8 w-8 rounded-full" src={"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}/>
              <h1 className="text-xl font-semibold text-gray-800">{cryptoData.name}</h1>
              <p className="text-lg text-gray-500">{cryptoData.symbol.toUpperCase()} Price</p>
              <p className="text-gray-700 text-xs bg-gray-100 rounded-xl px-2 py-1">#{cryptoData.name}</p>
            </div>
            <div className="flex space-x-4 items-center">
              <p className="font-semibold text-4xl">$62,8000.81</p>
              <p className="text-green-600 font-semibold text-2xl">4.3%</p>
              <p></p>
            </div>
            <div className="flex items-center space-x-4 text-sm">
                <p className="text-gray-400">1.00000 BTC</p>
                <p className="text-green-600">0.0%</p>
            </div>
          </div>
          <div className="space-y-3">
            {cards.map((card:any) => (
                <div className="flex justify-between">
                    <p className="text-gray-500">{card.heading}</p>
                    <p className="text-gray-800 font-medium">${card.price}</p>
                </div>
            ))}
          </div>
        </div>
        <div className="border-2 border-red-600 w-2/3">
            {JSON.stringify(cryptoData)}
            {crypto}

        </div>
      </div>
    </div>
  );
};
 
export default CryptoDetails;