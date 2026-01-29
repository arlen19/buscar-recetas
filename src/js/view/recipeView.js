import icons from 'url:../../img/icons.svg';
import Fraction from 'fraction.js';

class RecipeView {
#parentElement = document.querySelector('.recipe');
#data;

render(data) {
    this.#data = data;
    this.#clean();

    const markup = this.#generateMarkup();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
}

  // Método público para mostrar spinner
renderSpinner() {
    const markup = `
    <div class="spinner">
        <svg>
        <use href="${icons}#icon-loader"></use>
        </svg>
    </div>
    `;

    this.#clean();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
}

  // Limpia el contenedor
#clean() {
    this.#parentElement.innerHTML = '';
}

  // Genera el HTML de la receta
#generateMarkup() {
    return `
    <figure class="recipe__fig">
        <img src="${this.#data.image}" alt="${this.#data.title}" class="recipe__img" />
        <h1 class="recipe__title">
        <span>${this.#data.title}</span>
        </h1>
    </figure>

    <div class="recipe__details">
        <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">
            ${this.#data.cookingTime}
        </span>
        <span class="recipe__info-text">minutes</span>
        </div>

        <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">
            ${this.#data.servings}
        </span>
        <span class="recipe__info-text">servings</span>
        </div>
    </div>

    <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        ${this.#data.ingredients
            .map(
            ing => `
            <li class="recipe__ingredient">
                <svg class="recipe__icon">
                <use href="${icons}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">
                ${ing.quantity? new Fraction(ing.quantity).toString() : ''
                }
                </div>
                <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
                </div>
            </li>
            `
            )
            .join('')}
        </ul>
    </div>

    <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this.#data.publisher}</span>.
        Please check out directions at their website.
        </p>
        <a
        class="btn--small recipe__btn"
        href="${this.#data.sourceUrl}"
        target="_blank"
        >
        <span>Directions</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
        </a>
    </div>
    `;
}
}

// Exporta una instancia para mantener privados los campos
export default new RecipeView();