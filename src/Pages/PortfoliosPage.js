import React from 'react';
import Tittle from '../Components/Tittle';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import portfolios from '../Components/allportfolios';
import { useState } from 'react';

const allCategories = [
  'All',
  ...new Set(portfolios.map((item) => item.category)),
];
console.log(allCategories);

function PortfoliosPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if (category === 'All') {
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Tittle title={'Portfolios'} span={'Portfolios'} />
      </div>
      <div className="portfolios">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default PortfoliosPage;
