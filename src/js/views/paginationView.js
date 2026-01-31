import { View } from "./View";
const icons = new URL('../../img/icons.svg', import.meta.url);

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');
    _curPage = this._data.page;
    _generateMarkup() {
        const numPages = Math.ceil(
            this._data.results.length / this._data.resultsPerPage
        );
    }
}

    if (this._curPage === 1 && numPages > 1) {
        return `
            <button class="btn--inline pagination__btn--next data-goto="${this._curPage + 1}">
            <span>Page ${this._curPage + 1}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
            </button>
        `;
    }
    
    if (this._curPage === numPages && numPages > 1) {
        return `
            <button class="btn--inline pagination__btn--prev data-goto="${this._curPage - 1}">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._curPage - 1}</span>
            </button>
        `;
    }
    if (this._curPage > 1 && this._curPage < numPages) {
        return `
            <button class="btn--inline pagination__btn--next data-goto="${this._curPage + 1}">
            <span>Page ${this._curPage + 1}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
            </button>
            <button class="btn--inline pagination__btn--prev data-goto="${this._curPage - 1}">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._curPage - 1}</span>
            </button>
        `;
    }
    
    return '';