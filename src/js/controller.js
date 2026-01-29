import * as model from './model.js';
import recipeView from './view/recipeView.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Mostrar spinner (desde la vista)
    recipeView.renderSpinner();

    // Cargar receta en el modelo
    await model.loadRecipe(id);

    // Renderizar receta usando el estado del modelo
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
