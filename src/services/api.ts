import { axiosFactory } from './axiosFactory';

export const fetchCryptoData = async (crypto: string) => {
  const response = await axiosFactory("get",`http://localhost:3000/crypto/${crypto}`);
  return response;
};

