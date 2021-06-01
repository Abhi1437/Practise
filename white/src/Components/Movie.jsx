import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "../Components/Pagination";
import _ from "lodash";
import ListGenre from "./ListGenre";
import { getGenres } from "../services/fakeGenreService";
import { Link } from "react-router-dom";
import MoviesTable from "./MoviesTable";
import Search from "./Search";
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    selectedGenre: null,
    searchValue: "",
    currentPage: 1,
    genre: [{ _id: "12", name: "All Genres", type: "AA" }, ...getGenres()],
    sortcolumn: { path: "title", order: "asc" },
  };

  //Delete
  handleClick = (Movie) => {
    let movies = this.state.movies.filter((Mov) => Mov._id !== Movie._id);
    this.setState({ movies });
  };
  //pagenation
  handlePage = (Page) => {
    this.setState({ currentPage: Page });
  };
  //pagenation

  handlePaginate = (Page, filtered) => {
    let end = Page * this.state.pageSize;
    let start = end - this.state.pageSize;
    return _.slice(filtered, start, end);
  };
  // genre
  HandleGenre = (genre) => {
    this.setState({ currentPage: 1, selectedGenre: genre, searchValue: "" });
  };
  //sort
  handleSort = (sortcolumn) => {
    this.setState({ sortcolumn });
  };
  //Search
  handleSearch = (quer) => {
    this.setState({ searchValue: quer, currentPage: 1, selectedGenre: null });
  };
  //like
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({
      movies,
    });
  };
  render() {
    let filter = this.state.movies;
    if (this.state.searchValue)
      filter = this.state.movies.filter((m) =>
        m.title.toLowerCase().startsWith(this.state.searchValue.toLowerCase())
      );
    else if (this.state.selectedGenre && !this.state.selectedGenre.type)
      filter = this.state.movies.filter(
        (movie) => movie.genre._id === this.state.selectedGenre._id
      );

    const Sorted = _.orderBy(
      filter,
      [this.state.sortcolumn.path],
      [this.state.sortcolumn.order]
    );

    const Final = this.handlePaginate(this.state.currentPage, Sorted);

    return (
      <div>
        <div className="row">
          <div className="col-2">
            <h4>
              <ListGenre
                types={this.state.genre}
                selectedGenre={this.state.selectedGenre}
                onHandleGenre={this.HandleGenre}
              />
            </h4>
          </div>
          <div className="col">
            <Search
              value={this.state.searchValue}
              onChange={this.handleSearch}
            />

            {filter.length === 0 ? (
              <h2>"No Movies to display"</h2>
            ) : (
              <div>
                <Link
                  to="/addmovie"
                  className="btn btn-primary"
                  style={{ margin: 5 }}
                >
                  Add Movie
                </Link>

                <h3>No of Movies : {filter.length}</h3>
                <main>
                  <MoviesTable
                    Final={Final}
                    sortcolumn={this.state.sortcolumn}
                    onLike={this.handleLike}
                    onDelete={this.handleClick}
                    onSort={this.handleSort}
                  />
                  <Pagination
                    changePage={this.handlePage}
                    currentPage={this.state.currentPage}
                    totalItems={filter.length}
                    pageSize={this.state.pageSize}
                  />
                </main>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
