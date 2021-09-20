import './sass/main.scss';
import ApiImages from './js/apiService.js'
import getRefs from './js/refs.js'
import markup from "./templates/markup.hbs"

import { showNotice, showError } from "./js/notifications";

const refs = getRefs();
console.log(refs.listEl);
console.log(refs.formEl);
console.log(refs.btnEl);
console.log(refs.loadMoreBtn);

refs.formEl.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener("click", onBtnLoadMore);
// refs.loadMoreBtn.addEventListener('click', onScroll);
    ;
const imagesApiService = new ApiImages();

const noticeText = 'There are images on your  query)'
const ErrorText = 'Sorry, no data found. Enter another text'

function onSearch(e) {
    e.preventDefault();
    imagesApiService.searchQuery = e.currentTarget.elements.query.value;
    console.log(imagesApiService.searchQuery);

    /// если ввели  пробелы 
    // if (imagesApiService.searchQuery === "") {
    //     showError(ErrorText);
    // }
    //gthtl  новым запросом надо  обновить параметр  page  снова до 1 
    // и  очистить  страницу 

    imagesApiService.resetPage();
    clearImageGallery();

    imagesApiService.fetchData()
        .then((hits) => {
            console.log(hits);
            renderImageCard(hits);
        });
     showNotice(noticeText);
    }

function renderImageCard(hits) {
    refs.listEl.insertAdjacentHTML('beforeend', markup(hits))
}

function onBtnLoadMore(e) {
    imagesApiService.fetchData()
        .then((hits) => {
            console.log(hits);
            renderImageCard(hits);
            refs.listEl.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
            });
    });
}
/// очистить страницу  от рисунков перед новым запросом
function clearImageGallery() {
    refs.listEl.innerHTML = "";
}
















// import NewsApiService from './new-api.js';
// import articlesTpl from "./templates/articles.hbs"

// const refs = {
//     searchForm: document.querySelector('.js-search-form'),
//     articleContainer: document.querySelector('.js-articles-container'),
//     loadMoreBtn: document.querySelector('data-action="load-more"')
// };
// const newApiService = new NewsApiService();
// console.log(newApiService);



// // const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

// refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', onLoadMore);

// function onSearch(e) {
//     e.preventDefault();
 
//     newApiService.query = e.currentTarget.elements.query.value;
//     newApiService.resetPage();
//     newApiService.fetchArticles().then(articles => {
//         clearArticlesContainer();
//         appendArticlesMarkup(articles);
//     })
// }

 
// function onLoadMore() {
//     newApiService.fetchArticles().then(appendArticlesMarkup);
    
// } 

// function appendArticlesMarkup(articles) {
// refs.articleContainer.insertAdjacentHTML('beforeend', articlesTpl(articles))
// }

// function clearArticlesContainer() {
//     refs.articleContainer.innerHTML = "";
// }