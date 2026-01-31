class SearchView {
    _parentEl = document.querySelector('.search');
    getQuery() {
        const query = this._parentEl.querySelector('.search__field').value;
        this._cleanInput();
        return query;
    }
    addEventListener(handler) {
        this._parentEl.addEventListener('click', function (e) {
            e.preventDefault();
            handler();
        });
    }
    addhandlerSearch(handler) {
        this._parentEl.addEventListener('submit', function (e) {
            e.preventDefault();
            handler();
        });
    }
    _cleanInput() {
        this._parentEl.querySelector('.search__field').value = '';
    }
}
export default new SearchView();