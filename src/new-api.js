// const API_KEY = '4330ebfabc654a6992c2aa792f3173a3';
// const BASE_URL = 'https://newsapi.org/v2';
//  const options = {
//             headers: {
//                 Authorization: API_KEY,
//             },
//         };
   

// export default class NewsApiService{
//     constructor() {
//         this.searchQuery = "";
//         this.page = 1;
//     }
    
//     fetchArticles() {
       
//         const url = `${BASE_URL}/everything?q=${searchQuery}&language=en&pageSize=5&page=${this.page}`;
//         return fetch(url, options)
//             .then(resp => resp.json)
//             .then(data => {
//                 this.page += 1;
//                 return data.articles;
//             })
//     }

//     get query() {
//         this.searchQuery;
//     }
//     set query() {
//         this.searchQuery = newQuery;   
//     }
//     resetPage() {
//         this.page = 1;
//     }
// }