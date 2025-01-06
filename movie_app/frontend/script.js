const KEY = '8466aee16e1b76bec9120ae39357d373';

const API_LINK = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${KEY}&query=`;

const main = document.getElementById('section');
const search = document.getElementById('query');
const form = document.getElementById('form');

returnMovies(API_LINK);

function returnMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(function(data) {
            console.log(data.results);
            data.results.forEach(element => {
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');

                const div_col = document.createElement('div');
                div_col.setAttribute('class', 'column');

                const div_row = document.createElement('div');
                div_row.setAttribute('class', 'row');

                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail');
                image.setAttribute('id', 'image');

                const title = document.createElement('h3');
                title.setAttribute('id', 'title');

                const center = document.createElement('center');

                title.innerHTML = `${element.title} <br> <a href="" style="color: rgb(196, 71, 25); text-decoration: underline; text-decoration-style: dotted;">Reviews</a>`;
                image.src = IMG_PATH + element.poster_path;
                center.appendChild(image);
                div_card.appendChild(center);
                div_card.appendChild(title);
                div_col.appendChild(div_card);
                div_row.appendChild(div_col);

                main.appendChild(div_row);
            });
        });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';
    const searchItem = search.value;

    if(searchItem) {
        returnMovies(SEARCH_API + searchItem);
        // search.value = '';
    }
});