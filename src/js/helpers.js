import getRefs from '../js/refs.js'
import markup from "../templates/markup.hbs"

const refs = getRefs();

  function renderImageCard(hits) {
    refs.listEl.insertAdjacentHTML('beforeend', markup(hits))
  }

  function clearImageGallery() {
    refs.listEl.innerHTML = "";
}

export { renderImageCard, clearImageGallery } 