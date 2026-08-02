"use client";

import { useState } from "react";
import { allCocktails } from "../../constants/index.js";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCocktails = allCocktails.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails; // slider that goes from 0 to totalCocktails length and then restarts from scratch. logic - it moves infinitely (бесконечно) ro the right but resets at 4. % - Remainder operator

    setCurrentIndex(newIndex);
  };

  return (
    <section id="menu" aria-label="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />

      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
    </section>
  );
};

export default Menu;
