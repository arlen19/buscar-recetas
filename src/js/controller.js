import * as model from './model.js';
import RecipeView from './views/RecipeView.js';
import searchViews from './views/searchViews.js';
import ResultsView from './views/ResultsView.js';
import paginationView from './views/paginationView.js';

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    RecipeView.renderSpinner();

    await model.loadRecipe(id);

    RecipeView.render(model.state.recipe);
  } catch (err) {
    RecipeView.renderError();
    throw err;
  }
}

async function controlSearchResults() {
  try {
    const query = searchViews.getQuery();
    if (!query) return;

    ResultsView.renderSpinner();

    await model.loadSearchResults(query);

    ResultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    throw err;
  }
}

const init = function () {
  RecipeView.addHandlerRender(controlRecipes);
  searchViews.addhandlerSearch(controlSearchResults);
};
init();





// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
