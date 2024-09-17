document.getElementById("searchButton").addEventListener("click", buscarPeliculas);

let api_key = "8fbede14b77bc5e2f5d5af0bb3a47a63";
let url_base = "https://api.themoviedb.org/3/search/movie";
let url_img = "https://image.tmdb.org/t/p/w500";

  let resultContainer = document.getElementById('results')


function buscarPeliculas() {
  resultContainer.innerHTML = 'Cargando...'
  let searchInput = document.getElementById("searchInput").value;
  fetch(`${url_base}?api_key=${api_key}&query=${searchInput}`)
    .then((response) => response.json())
    // .then(response => console.log(response))
    .then((response) => displayMovies(response.results))
}

function displayMovies(movies){
  resultContainer.innerHTML = ''

  if(movies.length === 0){
    resultContainer.innerHTML = '<p>No se encontraron resultados para tu busqueda.</p>'
    return
  } 

  movies.forEach(movie => {
    let movieDiv = document.createElement('div')
    movieDiv.classList.add('movie')

    let title = document.createElement('h2')
    title.textContent= movie.title

    let releaseDate = document.createElement('p')
    releaseDate.textContent = 'La fecha de lanzamiento fue: '+movie.release_date

    let overView = document.createElement('p')
    overView.textContent = movie.overview

    let posterPath = url_img+movie.poster_path
    let poster = document.createElement('img')
    poster.src= posterPath

    movieDiv.appendChild(poster)
    movieDiv.appendChild(title)
    movieDiv.appendChild(releaseDate)
    movieDiv.appendChild(overView)

    resultContainer.appendChild(movieDiv)

  });
}