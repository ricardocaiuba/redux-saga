import React, { useCallback } from "react";
import { IProduct } from "../store/modules/cart/types";
import { addProductToCard } from "../store/modules/cart/actions";
import { useDispatch } from "react-redux";

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCard(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong>
      {" - "}
      <span>{product.price}</span> {" - "}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;
