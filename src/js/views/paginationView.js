// here will we contructing the pagination logic of the scrolling

import View from './View.js';
// importing icons
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _curPage;
  _numPages;

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    this._curPage = this._data.page;
    this._numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (this._curPage === 1 && this._numPages > 1) {
      return `
        ${this._generateMarkupLast()}
      `;
    }

    // Last page
    if (this._curPage === this._numPages && this._numPages > 1) {
      return `
      ${this._generateMarkupPrev()}
      `;
    }
    // Other page
    if (this._curPage < this._numPages) {
      return `
      ${this._generateMarkupPrev()}
        ${this._generateMarkupLast()}
    `;
    }

    // Page 1, and there are NOT other pages
    return ``;
  }

  _generateMarkupPrev() {
    return `
      <button data-goto="${
        this._curPage - 1
      }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${this._curPage - 1}</span>
      </button>
      `;
  }

  _generateMarkupLast() {
    return `
       <button data-goto="${
         this._curPage + 1
       }" class="btn--inline pagination__btn--next">
           <span>Page ${this._curPage + 1}</span>
           <svg class="search__icon">
             <use href="${icons}#icon-arrow-right"></use>
           </svg>
         </button>
     `;
  }
}

export default new PaginationView();
