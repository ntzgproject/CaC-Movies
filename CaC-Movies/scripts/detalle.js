document.addEventListener('DOMContentLoaded', function() {

    let pelicula = JSON.parse(localStorage.getItem("peliculaGuardada"));
    console.log('la pelicula es: ', pelicula[0]);

    
    let container = document.querySelector('.mainDetalle .detalle .contenedorDetalle .imgDetalle');

    container.innerHTML = '<img src="https://image.tmdb.org/t/p/w500' + pelicula[0].poster_path + '" alt="${pelicula[0].title}">';
    // container.appendChild(containerMain);
    




    let descripcion = document.getElementsByClassName('textoDetalle')[0];
    
    descripcion.innerHTML = '<h1>' + pelicula[0].title + '</h1>' + '<br>' + '<p>' + pelicula[0].overview + '</p>';

    let detalleElement = document.querySelector('.mainDetalle .detalle');
    detalleElement.style.backgroundImage = `linear-gradient(to right top, #6d6969a7, #6d6969a7), url('https://image.tmdb.org/t/p/w500${pelicula[0].backdrop_path}')`;


});

// border-radius: 20px
// overflow-clip-margin: content-box
// overflow = clip