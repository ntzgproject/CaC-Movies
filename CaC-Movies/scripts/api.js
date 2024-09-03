document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '52dc8baf03d31421eb118edb33d5d038';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES`;
    const apiUrl_top = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };


    fetch(apiUrl, options)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let moviesData = data;

        // console.log(moviesData);
    
        displayMovies(data, 'peliculas')
    })
    .catch(error => console.error('Error al obtener los datos de películas aclamadas:', error));


// Renderizado de peliculas

    function displayMovies(data, container_id) {

        const movies = data.results;
        const container = document.getElementsByClassName(container_id)[0];

        container.innerHTML = '';
        
        if (!container) {
            console.error(`No se encontró el contenedor con el selector: ${container_id}`);
            return;
        }

        renderMovies(movies);
    }


    // Creacion de peliculas

    function renderMovies(movies) {
        
        movies.forEach(movie => {

// Agregar evento onclick
// borrar peliculas de .peliculas

            // Link a detalles
            const movieLink = document.createElement('a');
            movieLink.href = 'pages/detalle/detalle.html';

            //Contenedor de la pelicula
            const movieElement = document.createElement('div');
            movieElement.classList.add('pelicula');

            //Imagen
            const moviePoster = document.createElement('img');
            moviePoster.classList.add('imgTendencia');
            moviePoster.src= `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            moviePoster.alt = movie.title;
            moviePoster.loading = "lazy";

            // Contenedor del titulo    
            const movieTitleDiv = document.createElement('div');
            movieTitleDiv.classList.add('tituloPelicula');

            // Crear titulo
            const movieTitle = document.createElement('h4');
            movieTitle.textContent = `${movie.title}`;

            // Estructura
            movieTitleDiv.appendChild(movieTitle);
            movieElement.appendChild(moviePoster);
            movieElement.appendChild(movieTitleDiv);
            movieLink.appendChild(movieElement);

            const peliculasContainer = document.getElementsByClassName('peliculas')[0];
            peliculasContainer.appendChild(movieLink);
        });
    }
});



// {/* <p>${movie.overview}</p> */}