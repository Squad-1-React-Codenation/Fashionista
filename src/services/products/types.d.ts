export type ProductResponseType = {
  name: string;
  style: string;
  code_color: string;
  color_slug: string;
  color: string;
  on_sale: boolean;
  regular_price: string;
  actual_price: string;
  discount_percentage: string;
  installments: string;
  image: string;
  sizes: ProductSizeType[];
};

export type ProductSizeResponseType = {
  available: boolean;
  size: string;
  sku: string;
};

export type ProductType = {
  name: string;
  style: string;
  codeColor: string;
  colorSlug: string;
  color: string;
  onSale: boolean;
  regularPrice: number;
  actualPrice: number;
  discountPercentage: number | undefined;
  installments: { quantity: number; price: number };
  image: string;
  sizes: ProductSizeResponseType[];
};
