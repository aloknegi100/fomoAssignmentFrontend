import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFetchPriceHistory } from '../hooks/useFetchCryptoList';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const PriceHistoryGraph: React.FC = () => {
    const { id: crypto } = useParams<{ id: string }>();
    const { isLoading } = useFetchPriceHistory(crypto);

    const priceHistory = useSelector((state: any) => state.crypto.priceHistory);
    const error = useSelector((state: any) => state.crypto.error);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    
    const data = priceHistory?.map((entry: [number, number]) => ({
        date: new Date(entry[0]).toLocaleString(),
        price: entry[1],
    }));
    console.log("data",data,priceHistory);
    

    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PriceHistoryGraph;
