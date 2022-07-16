// Results View, work with the DOM
import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipes found for your query! Please try again :D`;
  _message = '';

  _generateMarkup() {
    const data = this._data
      .map(result => previewView.render(result, false))
      .join('');
    return data;
  }
}

export default new ResultsView();
