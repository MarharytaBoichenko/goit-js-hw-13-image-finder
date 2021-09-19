import './sass/main.scss';
import ApiImages from './js/apiService.js'
import getRefs from './js/refs.js'
import markup  from "./templates/markup.hbs"

const refs = getRefs();
console.log(refs.listEl);
console.log(refs.formEl);
console.log(refs.btnEl);


refs.formEl.addEventListener('submit', onSearch);

const imagesApiService = new ApiImages();

// fetch('https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=23459903-45cdb2e5cfc763a2eaddc7311')
//     .then(response => response.json)
//     .then(data => console.log(data));

function onSearch(e) {
    e.preventDefault();
    imagesApiService.searchQuery = e.currentTarget.elements.query.value;
    console.log(imagesApiService.searchQuery);

    imagesApiService.fetchData()
        .then((hits) => {
        console.log(hits);
            // renderImageCard(hits);
        }) 
    }

function renderImageCard(hits) {
    // const cardMarkup = markup(hits);
    refs.listEl.insertAdjacentHTML('beforeend', markup(hits))
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