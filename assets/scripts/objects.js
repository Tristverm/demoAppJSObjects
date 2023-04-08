const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

//functions

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = ""; // resetting the Element});

  const filteredMovies =
    filter === ""
      ? movies
      : movies.filter((movie) => {
          return movie.info.title.includes(filter);
        });

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");

    let text = movie.info.title + "--";

    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key} --- ${movie.info[key]}`;
      }
    }

    movieEl.textContent = text;

    movieList.appendChild(movieEl);
  });
};

// function handlers

const addMovieHandler = () => {
  const title = document.getElementById("title").value.toUpperCase();
  const extraName = document.getElementById("extra-name").value.toUpperCase();
  const extraValue = document.getElementById("extra-value").value.toUpperCase();

  //validation
  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    alert("One of the Entries is Empty");

    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
  title.value = "";
  extraName.value = "";
  extraValue.value = "";
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;

  renderMovies(filterTerm);
};

//event Listeners

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
