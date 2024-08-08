document.addEventListener('DOMContentLoaded', function() {
    let queryInput = document.querySelector('#query');
    let movieList = document.querySelector('#movie-list');

    queryInput.addEventListener('keyup', function() {
        $.get('/search?q=' + queryInput.value, function(movies) {
            html = '';
            for (let i in movies)
            {
                html += '<li>' + movies[i].title + '</li>';
            }

            movieList.innerHTML = html;
        });
    });
});
