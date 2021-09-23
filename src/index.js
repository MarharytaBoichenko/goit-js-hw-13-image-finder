import './sass/main.scss';
import ApiImages from './js/apiService.js'
import getRefs from './js/refs.js'
import markup from "./templates/markup.hbs"
import LoadMoreBtn from './js/button.js';
import onImgClick from "./js/modal.js";
import { renderImageCard, clearImageGallery } from './js/helpers.js';

import { showNotice, showError } from "./js/notifications";

const refs = getRefs();

const imagesApiService = new ApiImages();
const loadMoreBtn = new LoadMoreBtn( '[data-action="load-more"]');

refs.formEl.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener("click", onBtnLoadMore);
refs.listEl.addEventListener('click', onImgClick);

const noticeText = 'There are images on your  query)'
const ErrorText = 'Sorry, no data found. Enter another text';


function onSearch(e) {
    e.preventDefault();
    imagesApiService.searchQuery = e.currentTarget.elements.query.value.trim();

    loadMoreBtn.show();
    loadMoreBtn.disable();
    /// если ввели  пробелы 
    if (imagesApiService.searchQuery === "") {
        showError(ErrorText);
        return;
    }
    //gthtl  новым запросом надо  обновить параметр  page  снова до 1 
    // и  очистить  страницу 

    imagesApiService.resetPage();
    clearImageGallery();

    imagesApiService.fetchData()
        .then((data) => {
            const { hits, totalHits } = data;

            if (hits.length === 0) {
                showError(ErrorText);
                loadMoreBtn.hide();
                console.log(imagesApiService.searchQuery);
                refs.formEl.reset();
                return; 
            }

            renderImageCard(hits);

            if (totalHits <= 12) {
                loadMoreBtn.hide();
            }
            loadMoreBtn.enable();
            showNotice(noticeText);
        });
    }

function onBtnLoadMore(e) {
    imagesApiService.fetchData()
        .then((data) => {
             const { hits } = data;
            console.log(hits);
             loadMoreBtn.disable();  ////вот тут не  пойму, но наверное кнопка не становится Loading   
            renderImageCard(hits);
            refs.listEl.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
            });
           
            console.log(hits.length);
            loadMoreBtn.enable();
             if (hits.length < 12) {
                loadMoreBtn.hide();
            }
    });
}















