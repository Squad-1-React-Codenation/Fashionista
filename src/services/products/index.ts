import { ProductResponseType, ProductType } from "./types";

const CODENATION_API = "https://5e9935925eabe7001681c856.mockapi.io/api/v1";

const removeNonDigits = (value: string): string => value.replace(/\D/g, "");
export const parseProduct = (product: ProductResponseType): ProductType => {
  const unparsedInstallment = product.installments.split("x");
  return {
    ...product,
    codeColor: product.code_color,
    colorSlug: product.code_color,
    onSale: product.on_sale,
    regularPrice: +removeNonDigits(product.regular_price),
    actualPrice: +removeNonDigits(product.actual_price),
    discountPercentage: +removeNonDigits(product.discount_percentage),
    installments: {
      quantity: +unparsedInstallment[0],
      price: +removeNonDigits(unparsedInstallment[1]),
    },
  };
};

export default class ProductAPI {
  private baseURL: string;

  constructor() {
    this.baseURL = CODENATION_API;
  }

  public async getCatalog(): Promise<ProductType[]> {
    const response = await fetch(this.baseURL + "/catalog");
    const products: ProductResponseType[] = await response.json();

    return products.map((product) => parseProduct(product));
  }

  public async getProduct(
    style: string
  ): Promise<{
    product?: ProductType;
    additionalColors: ProductType[] | null;
  }> {
    const response = await fetch(`${this.baseURL}/catalog?search=${style}`);
    const productsResponse: ProductResponseType[] = await response.json();
    const products = productsResponse
      .map((product) => parseProduct(product))
      .filter((product) => product.style.includes(style));

    return {
      product: products[0],
      additionalColors: products.slice(1),
    };
  }

  public async searchProduct(search: string): Promise<ProductType[]> {
    const response = await fetch(`${this.baseURL}/catalog?search=${search}`);
    const products: ProductResponseType[] = await response.json();

    return products.map((product) => parseProduct(product));
  }
}
