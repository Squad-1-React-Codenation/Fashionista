import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LargeButton, SizeInfoButton } from "../../components/base/buttons";
import { getProduct } from "../../store/products/actions";
import { addToCart } from "../../store/cart/actions";
import { StoreState } from "../../store";
import {
  ProductType,
  ProductSizeResponseType,
} from "../../services/products/types";
import centsToCash from "../../lib/format/centsToCash";
import { useTranslation } from "react-i18next";
import { ProductCartType } from "../../store/cart/types";

export const Product = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector(
    (state: StoreState) => state.products.currentProduct
  );
  const [showSizeEmpty, setShowSizeEmpty] = useState(false);

  const [selectedSize, setSelectedSize] = useState({
    available: false,
    size: "",
    sku: "",
  });

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const handleSizeChange = (size: ProductSizeResponseType) => {
    setSelectedSize(size);
    setShowSizeEmpty(false);
  };

  const addProductToCart = (product: ProductType) => {
    if (!selectedSize.size) {
      setShowSizeEmpty(true);
      return;
    }

    const newProduct: ProductCartType = {
      product,
      quantity: 1,
      size: selectedSize,
    };

    dispatch(addToCart(newProduct));
  };

  if (loading || !product) return <span>Loading</span>;

  return (
    <div className="singleProduct">
      <div className="singleProduct__photo">
        <img src={product.image} alt="" />
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
              {centsToCash(product.regularPrice)}
            </span>
          )}
          <span className="productPrice productPrice__to">
            {centsToCash(product.actualPrice)}
          </span>
          <span className="productPrice productPrice__installments">
            em até {product.installments.quantity}x R${" "}
            {centsToCash(product.installments.price)}
          </span>
        </div>
        <div className="product__sizes">
          <p className="product__sizes-title">{t("pickSize")}</p>
          {showSizeEmpty && (
            <p className="product__sizes-empty">{t("sizeEmpty")}</p>
          )}
          {product.sizes.map(
            (size) =>
              size.available && (
                <SizeInfoButton
                  key={size.sku}
                  modifier={size.size.length > 1 ? "large" : ""}
                  value={selectedSize.sku}
                  sizes={size.size}
                  onChange={() => handleSizeChange(size)}
                />
              )
          )}
        </div>
        <div className="product__actions">
          <LargeButton onClick={() => addProductToCart(product)}>
            {t("addToBag")}
          </LargeButton>
        </div>
      </div>
    </div>
  );
};

export default Product;
