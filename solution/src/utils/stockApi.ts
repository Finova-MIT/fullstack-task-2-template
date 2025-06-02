const API_URL = "https://finova-mancomm.vercel.app/api/stock";

const fetchCurrentPrice = async (): Promise<number | undefined> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data?.price;
};

export { fetchCurrentPrice };
