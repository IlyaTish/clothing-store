import React from "react";

import CatalogItem from "./Item/Catalog-item.component";

import "./Catalog.styles.sass";

const Catalog = ({ title, items }) => (
  <div className="catalog">
    <h1 className="catalog__h">{title.toUpperCase()}</h1>
    <div className="catalog__container">
      {
        items.filter((item, index) => index < 4).map(({ id, ...otherItemProps }) => (
          <CatalogItem key={id} {...otherItemProps} />
        ))
      }
    </div>
  </div>
);

export default Catalog;