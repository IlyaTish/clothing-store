import React from "react";

import SHOP_DATA from "./Shoppage.data.js";

import Catalog from "../../components/Catalog/Catalog.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render () {
    const {collections} = this.state;
    return (
      <div className="shoppage">
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <Catalog key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage;