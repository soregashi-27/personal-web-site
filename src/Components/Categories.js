import React from 'react';
import { NavLink } from 'react-router-dom';

function Categories({ filter, categories }) {
  return (
    <div>
      {categories.map((categoriesBtn, i) => {
        return (
          <button
            type="button"
            className="btn-port"
            onClick={() => filter(categoriesBtn)}
            key={i}
          >
            {categoriesBtn}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
