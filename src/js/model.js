import { getJSON } from './helpers.js';
import { API_URL } from './config.js';
import { RES_PER_PAGE } from './config.js';

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    },
};

export async function loadRecipe(id) {
    try {
        const data = await getJSON(`${API_URL}${id}`);
        const recipe = {id: data.data.recipe.id,
        title: data.data.recipe.title,
        publisher: data.data.recipe.publisher,
        source_url: data.data.recipe.source_url,
        image_url: data.data.recipe.image_url,
        servings: data.data.recipe.servings,
        cooking_time: data.data.recipe.cooking_time,
        ingredients: data.data.recipe.ingredients,
        search: {
            query: '',
            results: []
        }
        };
        
        state.recipe = recipe;
    }
    catch (err) {
        console.error(`${err} 💥💥💥`);
        throw err;
    }
}

export async function loadSearchResults(query) {
    try {
        state.search.query = query;
        const data = await getJSON(`${API_URL}/?search=${query}`);
        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image_url: rec.image_url,
            };
        });
    }
    catch (err) {
        console.error(`${err} 💥💥💥`);
        throw err;
    }
}

export function getSearchResultsPage(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end);
}    