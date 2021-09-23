const API_KEY = '23459903-45cdb2e5cfc763a2eaddc7311';
const BASE_URL = 'https://pixabay.com/api';

export default class ApiImages {
     constructor(){
         this.page = 1;
         this.per_page = 12;
        this.searchQuery = "";
    }

    fetchData(){
        const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.per_page}&key=${API_KEY}`
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                this.page += 1;
                return data;
            })
    }

    get query(){
        return this.searchQuery;
    }

    set  query(newQuery){
        return this.searchQuery = newQuery;
    }

    resetPage() {
    this.page = 1;
    }

}




