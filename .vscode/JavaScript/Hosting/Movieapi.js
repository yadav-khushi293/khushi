const apiKey = "3d15e923";

const urlParams = new URLSearchParams(window.location.search);
const imdbID = urlParams.get("id");

const getMovieDetails = async () => {
  if (!imdbID) return;

  const api = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}&plot=full`;
  try {
    const response = await fetch(api);
    const data = await response.json();

    showDetails(data);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const showDetails = (movie) => {
  const container = document.getElementById("movieDetails");
  const movie_detail_card = document.createElement("div");
  const title = document.createElement("h1");
  const poster = document.createElement("img");
  const year = document.createElement("h4");
  const genre = document.createElement("h4");
  const director = document.createElement("h4");
  const actors = document.createElement("h4");
  const plot = document.createElement("h4");
  const language = document.createElement("h4");
  const imdb = document.createElement("h4");
  const type = document.createElement("h4");
  const season = document.createElement("h4");
  const writer = document.createElement("h4");
  const runtime = document.createElement("h4");

  movie_detail_card.className = "movie_detail_card";
  poster.className = "poster";
  plot.className = "plot";

  title.innerText = movie.Title;
  poster.src = movie.Poster;
  year.innerHTML = `<u>Year</u>: ${movie.Year}`;
  genre.innerHTML = `<u>Genre</u>: ${movie.Genre}`;
  director.innerHTML = `<u>Director</u>: ${movie.Director}`;
  actors.innerHTML = `<u>Actors</u>: ${movie.Actors}`;
  plot.innerHTML = `<u>Plot</u>: ${movie.Plot}`;
  language.innerHTML = `<u>Languages</u>: ${movie.Language}`;
  imdb.innerHTML = `<u>IMDB Rating</u>: ${movie.imdbRating}`;
  type.innerHTML = `<u>Type</u>: ${movie.Type}`;
  season.innerHTML = `<u>Total</u> <u>Seasons</u>: ${
    movie.totalSeasons || "It Is A Movie"
  }`;
  runtime.innerHTML = `<u>Run</u> <u>Time</u>: ${movie.Runtime}`;
  writer.innerHTML = `<u>Writer</u>: ${movie.Writer}`;
  movie_detail_card.append(
    title,
    poster,
    year,
    genre,
    director,
    writer,
    actors,
    plot,
    language,
    imdb,
    type,
    runtime,
    season
  );
  container.innerHTML = ""
  container.append(movie_detail_card);
};

getMovieDetails();