import React, { useState, useEffect } from "react";

import { IProduct } from "../store/modules/cart/types";
import api from "../services/api";
import CatalogItem from "./CatalogItem";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main>
      <h2>Catalog</h2>
      <hr />
      {catalog.map((product) => {
        return <CatalogItem key={product.id} product={product} />;
      })}
    </main>
  );
};

export default Catalog;
