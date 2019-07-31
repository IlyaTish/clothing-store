import React from "react";

import MenuItem from "./MenuItem/HomepageMenu-MenuItem";

import './HomepageMenu.sass';

class HomepageMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Шапки",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "Толстовки, свитшоты",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "Кроссовки",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          title: "Для женщин",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "homepage-menu__item--large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          title: "Для мужчин",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "homepage-menu__item--large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }

  render() {
    return (
      <div className="homepage-menu">
        {
          this.state.sections.map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))
        }
      </div>
    )
  }
}

export default HomepageMenu;