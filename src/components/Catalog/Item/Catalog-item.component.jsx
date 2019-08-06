import React from "react";

import "../Catalog.styles.sass";

const CatalogItem = ({ id, name, price, imageUrl }) => (
  <div className="catalog-item">
    <div 
      className="catalog-item__img"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="catalog-item__footer">
      <span className="catalog-item__title">{ name }</span>
      <span className="catalog-item__price">{ price }</span>
    </div>
  </div>
);

export default CatalogItem;