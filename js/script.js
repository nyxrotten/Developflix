import peliculas from './peliculas.js';

let generoContainers = document.querySelectorAll('.genero');
/*let accion  = document.getElementById('genero-28')
let thriller  = document.getElementById('genero-53');
let aventuras  = document.getElementById('genero-12');
let tituloThriller = document.getElementById('titulo-thriller');*/

generoContainers.forEach((container) => {
  const generoId = +container.id.split('-')[1];

  const peliculasFiltradas = peliculas.filter((pelicula) => {
    return pelicula.genre_ids.includes(generoId);
  })

  peliculasFiltradas.forEach(pelicula => {

    const titulo = pelicula.title;
    const posterPeli = 'https://image.tmdb.org/t/p/w200' + pelicula.poster_path;

    let card = document.createElement('article');
    card.classList.add('card');
    
    let poster = document.createElement('img');
    poster.classList.add('card_poster');
    poster.src = posterPeli;

    let titlePeli = document.createElement('h3');
    titlePeli.classList.add('card_title');
    titlePeli.textContent = titulo;

    card.append(poster, titlePeli);

    container.appendChild(card)

  })

});

  
  


























// FILTRADO PELICULAS

/*let peliAcc = [];
for (let i=0; i < peliculas.length; i++) {
  if(peliculas[i].genre_ids.includes(28)) {
    peliAcc.push(peliculas[i])};
  };


let peliThr = [];
for (let i=0; i < peliculas.length; i++) {
  if(peliculas[i].genre_ids.includes(53)) {
    peliThr.push(peliculas[i])};
  };


let peliAve = peliculas.filter(pelicula => pelicula.genre_ids.includes(12));

// CREAR LOS ELEMENTOS EN LOS DIVs*/


