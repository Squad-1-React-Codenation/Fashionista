import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LargeButton, SizeInfoButton } from "../../components/base/buttons";
import { getProduct } from "../../store/products/actions";
import { addToCart } from "../../store/cart/actions";
import { StoreState } from "../../store";
import { ProductType } from "../../services/products/types";

export const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector(
    (state: StoreState) => state.products.currentProduct
  );

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const addProductToCart = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  if (loading || !product) return <span>Loading</span>;

  return (
    <div className="singleProduct">
      <div className="singleProduct__photo">
        <img
          src={product.image ? product.image : "img/image-not-found.png"}
          alt=""
        />
        {product.discountPercentage ? (
          <span className="product__discount-badge">
            -{product.discountPercentage}%
          </span>
        ) : null}
      </div>
      <div className="product__content">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__pricing">
          {product.onSale && (
            <span className="productPrice productPrice__from">
              {product.regularPrice}
            </span>
          )}
          <span className="productPrice productPrice__to">
            {product.actualPrice}
          </span>
          <span className="productPrice productPrice__installments">
            em até {product.installments.price}
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
          <LargeButton onClick={() => addProductToCart(product)}>
            Adicionar à Sacola
          </LargeButton>
        </div>
      </div>
    </div>
  );
};

export default Product;
