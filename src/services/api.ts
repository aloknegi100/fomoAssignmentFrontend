import { axiosFactory } from './axiosFactory';

export const fetchCryptoDataApi = async (crypto: string|undefined) => {
  const response = await axiosFactory("get",`http://localhost:3000/crypto/saveCryptoData?crypto=${crypto}`);
  return response;
};

export const fetchCryptoListApi = async () => {
  const response = await axiosFactory("get",`http://localhost:3000/crypto/getCryptoList`);
  return response;
};

