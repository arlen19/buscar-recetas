import * as model from './model.js';
import RecipeView from './views/RecipeView.js';
import searchViews from './views/searchViews.js';
import ResultsView from './views/ResultsView.js';
import paginationView from './views/paginationView.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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

const controlPagination = function (goToPage) {
  ResultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
}

const init = function () {
  RecipeView.addHandlerRender(controlRecipes);
  searchViews.addhandlerSearch(controlSearchResults);
  paginationView._addHandlerClick(controlPagination);
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
    paginationView.render(model.state.search);
}
  catch (err) {
    console.error(`${err} 💥💥💥`);
    throw err;
  }
}





// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
