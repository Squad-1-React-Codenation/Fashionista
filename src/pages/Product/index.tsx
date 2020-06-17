import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../../services/types";
import { productAPI } from "../../services/productAPI";
import {
  LargeButton,
  LargeDiscountInfoButton,
  SizeInfoButton,
} from "../../components/base/buttons";

type ProductPropsType = {
  product: ProductType;
};

export const Product = () => {
  const [produto, setProducts] = useState<ProductType[]>([]);
  const { id } = useParams();

  useEffect(() => {
    productAPI("?search=" + id).then((produto) => setProducts(produto));
  }, []);

  const props = produto.map((produto) => {
    return produto;
  });

  if (!produto.length) return <span>Loading</span>;

  return (
    <div className="single__product">
      <div className="single__product-photo">
        <img src={props[0].image} alt="" />
        {props[0].discount_percentage.length ? (
          <LargeDiscountInfoButton>
            -{props[0].discount_percentage}
          </LargeDiscountInfoButton>
        ) : (
          ""
        )}
      </div>
      <div className="product__content">
        <h3 className="product__name">{props[0].name}</h3>
        <div className="product__pricing">
          <span className="product__price product__price--from">
            {props[0].regular_price}
          </span>
          <span className="product__price product__price--to">
            {props[0].actual_price}
          </span>
          <span className="product__price product__price--installments">
            em até {props[0].installments}
          </span>
        </div>
        <div className="product__sizes">
          <p className="product__sizes__title">Escolha o tamanho</p>
          {props[0].sizes.map((size) => {
            if (size.available) {
              return (
                <SizeInfoButton
                  key={size.sku}
                  modifier={size.size.length > 1 ? "large" : ""}
                  value={size.sku}
                  sizes={size.size}
                />
              );
            }
          })}
        </div>
        <div className="product__actions">
          <LargeButton>Adicionar à Sacola</LargeButton>
        </div>
      </div>
    </div>
  );
};

export default Product;
