function e(e){return e&&e.__esModule?e.default:e}let r="https://forkify-api.herokuapp.com/api/v2/recipes/";async function t(e){try{let r=fetch(e),t=await Promise.race([r,s(5)]),n=await t.json();if(!t.ok)throw Error(`Error ${t.status}: no se pudo obtener la receta`);return n}catch(e){throw e}}let s=function(e){return new Promise((r,t)=>setTimeout(()=>t(Error(`Request took too long! Timeout after ${e} second${e>1?"s":""}`)),1e3*e))},n={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}};async function i(e){try{let s=await t(`${r}${e}`);n.recipe={id:s.data.recipe.id,title:s.data.recipe.title,publisher:s.data.recipe.publisher,source_url:s.data.recipe.source_url,image_url:s.data.recipe.image_url,servings:s.data.recipe.servings,cooking_time:s.data.recipe.cooking_time,ingredients:s.data.recipe.ingredients,search:{query:"",results:[]}}}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}}async function a(e){try{n.search.query=e;let s=await t(`${r}/?search=${e}`);n.search.results=s.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image_url:e.image_url}))}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}}function c(e=n.search.page){n.search.page=e;let r=(e-1)*n.search.resultsPerPage,t=e*n.search.resultsPerPage;return n.search.results.slice(r,t)}var l={};function o(e,r,t,s,n){var i,a,c,l;let o=[2,3,5];if(!0===n)for(let r=3;r*r<=e;r+=2)e%r==0&&o.push(r);let u=0,d=e,p=r;for(;u<=o.length;)d%o[u]==0&&p%o[u]==0?(o[u],d/=o[u],p/=o[u]):u++;return i=p,a=d,c=t,l=s,1===i&&1===a?(c=`${l}${(parseInt(c)+1).toString()}`,`${c}`):0===a?`${l}${c}`:"0"==c?`${l}${a}/${i}`:`${l}${c} ${a}/${i}`}l=function(e){var r,t,s,n,i,a,c,l;let u,d;if(e<0?(e=Math.abs(e),u="-"):u="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${u}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${u}${e}`;if(e<1e-6)return"0";let p=e.toString(),h=p.split("."),_=h[0];if("0"==d&&"0"!==_)return _;if("0"==d&&"0"==_)return"0";if("99"==(d=p.length>=17?h[1].slice(0,h[1].length-1):h[1])&&"0"!==_)return`${_} 99/100`;if("99"==d&&"0"==_)return"99/100";if(1-parseFloat(`.${d}`)<.0011&&(d="999"),void 0==d)return _;let g=d.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!g||!(d.length>2)){return r=d,t=_,s=u,o(parseInt(r,10),Math.pow(10,r.length),t,s,!1)}{let e,r,t,s,p=g[0].split("").reverse().join(""),h=g[1].split("").reverse().join("");if(h.length>1){let e=h.split(""),r=1;for(let t=0;t<e.length;t++)r/=e[0]/e[t];1===r&&(h=e[0])}return h.length>1&&h.length%2==0&&(h=parseInt(h.slice(0,h.length/2),10)-parseInt(h.slice(h.length/2,h.length),10)==0?h.slice(0,h.length/2):h),n=d,i=h,a=p,c=_,l=u,r=Math.pow(10,e=n.length-a.length>=1?n.length-a.length:1),o(Math.round(((t=parseFloat(`0.${n}`))*(s=Math.pow(10,i.length))-t)*Math.pow(10,e)),(s-1)*r,c,l,!0)}};var u={};u=import.meta.resolve("eyyUD");let d=new URL(import.meta.resolve("hfd23"));class p{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
            <svg>
            <use href="${d}#icon-loader"></use>
            </svg>
        </div>
        `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=`<div class="error">
            <div>
            <svg>
                <use href="${d}#icon-alert-triangle"></use>
            </svg>
            </div>
            <p>${e}</p>
            </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=`<div class="error">
        <div>
        <svg>
            <use href="${d}#icon-smile"></use>
        </svg>
        </div>
        <p>${e}</p>
        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}class h extends p{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";_data;render(e){this._data=e;let r=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}_generateMarkup(){return`
        <figure class="recipe__fig">
        <img src="${this._data.image_url}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
        <span>${this._data.title}</span>
        </h1>
        </figure>

        <div class="recipe__details">
        <div class="recipe__info">
            <svg class="recipe__info-icon">
            <use href="${e(u)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cooking_time}</span>
            <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
            <svg class="recipe__info-icon">
            <use href="${e(u)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
                <svg>
                <use href="${e(u)}#icon-minus-circle"></use>
                </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
                <svg>
                <use href="${e(u)}#icon-plus-circle"></use>
                </svg>
            </button>
            </div>
        </div>

        <div class="recipe__user-generated">
            <svg>
            <use href="${e(u)}#icon-user"></use>
            </svg>
        </div>
        <button class="btn--round">
            <svg class="">
            <use href="${e(u)}#icon-bookmark-fill"></use>
            </svg>
        </button>
        </div>

        <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(this._renderIngredient).join("")}
        </ul>
        </div>

        <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
        </p>
        <a
            class="btn--small recipe__btn"
            href="${this._data.source_url}"
            target="_blank"
        >
            <span>Directions</span>
            <svg class="search__icon">
            <use href="${e(u)}#icon-arrow-right"></use>
            </svg>
        </a>
        </div>

    `}_renderIngredient(r){return`
        <li class="recipe__ingredient">
        <svg class="recipe__icon">
        <use href="${e(u)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${r.quantity?e(l)(r.quantity):""}</div>
        <div class="recipe__description">
        <span class="recipe__unit">${r.unit}</span>
        ${r.description}
        </div>
        </li>
    `}renderSpinner(){let r=`
    <div class="spinner">
        <svg>
        <use href="${e(u)}#icon-loader"></use>
        </svg>
    </div>
    `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",r)}addHandlerRender(e){["hashchange","load"].forEach(r=>window.addEventListener(r,e))}renderError(r=this._errorMessage){let t=`<div class="error">
        <div>
        <svg>
            <use href="${e(u)}#icon-alert-triangle"></use>
        </svg>
        </div>
        <p>${r}</p>
        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(r=this._message){let t=`<div class="error">
        <div>
        <svg>
            <use href="${e(u)}#icon-smile"></use>
        </svg>
        </div>
        <p>${r}</p>
        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var _=new h;class g{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._cleanInput(),e}addEventListener(e){this._parentEl.addEventListener("click",function(r){r.preventDefault(),e()})}addhandlerSearch(e){this._parentEl.addEventListener("submit",function(r){r.preventDefault(),e()})}_cleanInput(){this._parentEl.querySelector(".search__field").value=""}}var v=new g;class f extends p{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again.";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(r){return`
        <li class="preview">
        <a class="preview__link" href="#${r.id}">
            <figure class="preview__fig">
            <img src="${r.image_url}" alt="Test" />
            </figure>
            <div class="preview__data">
            <h4 class="preview__title">${r.title}</h4>
            <p class="preview__publisher">${r.publisher}</p>
            <div class="preview__user-generated">
                <svg>
                <use href="${e(u)}#icon-user"></use>
                </svg>
            </div>
            </div>
        </a>
        </li>`}}var $=new f;class m extends p{_parentElement=document.querySelector(".pagination");_addHandlerClick(e){this._parentElement.addEventListener("click",function(r){let t=r.target.closest(".btn--inline");t&&e(+t.dataset.goto)})}_generateMarkup(){let r=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===r&&t>1?`
            <button class="btn--inline pagination__btn--next" data-goto="${r+1}">
            <span>Page ${r+1}</span>
            <svg class="search__icon">
            <use href="${e(u)}#icon-arrow-right"></use>
            </svg>
            </button>
        `:r===t&&t>1?`
            <button class="btn--inline pagination__btn--prev" data-goto="${r-1}">
            <svg class="search__icon">
            <use href="${e(u)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${r-1}</span>
            </button>
        `:r>1&&r<t?`
            <button class="btn--inline pagination__btn--prev" data-goto="${r-1}">
            <svg class="search__icon">
            <use href="${e(u)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${r-1}</span>
            </button>
            <button class="btn--inline pagination__btn--next" data-goto="${r+1}">
            <span>Page ${r+1}</span>
            <svg class="search__icon">
            <use href="${e(u)}#icon-arrow-right"></use>
            </svg>
            </button>
        `:""}}var b=new m;async function w(){try{let e=window.location.hash.slice(1);if(!e)return;_.renderSpinner(),await i(e),_.render(n.recipe)}catch(e){throw _.renderError(),e}}async function y(e){try{if(!(e=v.getQuery()))return;await a(e),console.log(n.search.results),$.renderSpinner(n.search.results),$.render(c()),b.render(n.search)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}}_.addHandlerRender(w),v.addhandlerSearch(y),b._addHandlerClick(function(e){$.render(c(e)),b.render(n.search)});
//# sourceMappingURL=forkify.03b0d333.js.map
