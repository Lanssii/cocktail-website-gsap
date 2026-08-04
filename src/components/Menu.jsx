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

  const getCocktailAt = (indexOffSet) => {
    return allCocktails[
      (currentIndex + indexOffSet + totalCocktails) % totalCocktails
    ];
  }; // we now which one is current one, previous or next. This mathematical formula protects code from going beyond the bounds of an array.

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

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

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-right"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} alt="" className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Menu;
