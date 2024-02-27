import peliculas from './peliculas.js'

let generoContainer = document.querySelectorAll('.genero-container');
let accion  = document.getElementById('genero-28')
let thriller  = document.getElementById('genero-53');
let aventuras  = document.getElementById('genero-12');

let pathPrincipal = "https://image.tmdb.org/t/p/w500"
//let pelisKo = peliculas.filter((pelicula) => pelicula.original_language == 'ko')
//console.log(pelisKo)


/*let nuevoElemento = document.createElement('img');
nuevoElemento.setAttribute(
  'src',
  'https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp'
);

let cajaImagen = document.getElementById('genero-28');
cajaImagen.appendChild(nuevoElemento)*/

let posterMuzzle = pathPrincipal + peliculas[1].poster_path;

let nuevoElemento = document.createElement('img');
nuevoElemento.setAttribute('src', posterMuzzle);

let cajaImagen = document.getElementById('genero-28');
cajaImagen.appendChild(nuevoElemento)

let peliAcc;

for (let i=0; i < peliculas.length; i++) {
   if(peliculas[i].genre_ids.includes((pelicula) => pelicula.genre_ids == 28)) {
    peliAcc += peliculas[i].genre_ids;
    console.log(peliAcc)
   }
   else {i++}
}
console.log(peliAcc)

console.log(peliculas[6].genre_ids);
let six = peliculas[6].genre_ids;

console.log(six)