import { ProductType } from "./types";

const URL = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog";

export const productAPI = async (filter?: string): Promise<ProductType[]> => {
  try {
    const res = await fetch(URL + filter);
    const products: ProductType[] = await res.json();
    return products;
  } catch {
    return [];
  }
};
