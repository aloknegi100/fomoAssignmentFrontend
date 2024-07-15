import { axiosFactory } from './axiosFactory';

const BACKEND_URL="http://localhost:3000"
export const fetchCryptoDataApi = async (crypto: string|undefined) => {
  const response = await axiosFactory("get",`${BACKEND_URL}/crypto/saveCryptoData?crypto=${crypto}`);
  return response;
};

export const fetchCryptoListApi = async () => {
  const response = await axiosFactory("get",`${BACKEND_URL}/crypto/getCryptoList`);
  return response;
};

export const fetchPriceHistoryApi = async (crypto: string|undefined) => {
  const response = await axiosFactory("get",`${BACKEND_URL}/crypto/getPriceHistory?crypto=${crypto}`);
  return response;
};

