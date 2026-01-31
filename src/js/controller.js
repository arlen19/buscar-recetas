import * as model from './model.js';
import RecipeView from './views/RecipeView.js';
import searchViews from './views/searchViews.js';
import ResultsView from './views/ResultsView.js';

//export const recipeContainer = document.querySelector('.recipe');
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

/*function renderSpinner(parentEl) {
  const markup = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div> -->

        <!-- <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>No recipes found for your query. Please try again!</p>
          </div>`;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
}//Hasta aqui*/

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    RecipeView.renderSpinner();
    await model.loadRecipe(id);
    RecipeView.render(model.state.recipe);
  }

  catch (err) {
    RecipeView.renderError();
    throw err;
  }

}

const init = function () {
  RecipeView.addHandlerRender(controlRecipes);
  searchViews.addhandlerSearch(controlSearchResults);
};
init();

async function controlSearchResults(query) {
  try {
    query = searchViews.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    console.log(model.state.search.results);
    ResultsView.renderSpinner(model.state.search.results);
    ResultsView.render(model.getSearchResultsPage());
}
  catch (err) {
    console.error(`${err} 💥💥💥`);
    throw err;
  }
}

//controlSearchResults("pizza");




// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
