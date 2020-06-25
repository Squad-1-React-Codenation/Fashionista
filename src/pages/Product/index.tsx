import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { LargeButton, SizeInfoButton } from "../../components/base/buttons";
import { mockedProducts } from "../../services/__mocks__/productAPI";

const product = mockedProducts[0];
export const Product = () => {
  const { id } = useParams();

  useEffect(() => {
    console.warn("id :>> ", id);
  }, [id]);

  if (!product) return <span>Loading</span>;

  return (
    <div className="single__product">
      <div className="single__product-photo">
        <img src={product.image} alt="" />
        {product.discount_percentage && (
          <span>-{product.discount_percentage}</span>
        )}
      </div>
      <div className="product__content">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__pricing">
          {product.on_sale && (
            <span className="product__price product__price-from">
              {product.regular_price}
            </span>
          )}
          <span className="product__price product__price-to">
            {product.actual_price}
          </span>
          <span className="product__price product__price-installments">
            em até {product.installments}
          </span>
        </div>
        <div className="product__sizes">
          <p className="product__sizes-title">Escolha o tamanho</p>
          {product.sizes.map(
            (size) =>
              size.available && (
                <SizeInfoButton
                  key={size.sku}
                  modifier={size.size.length > 1 ? "large" : ""}
                  value={size.sku}
                  sizes={size.size}
                />
              )
          )}
        </div>
        <div className="product__actions">
          <LargeButton>Adicionar à Sacola</LargeButton>
        </div>
      </div>
    </div>
  );
};

export default Product;
