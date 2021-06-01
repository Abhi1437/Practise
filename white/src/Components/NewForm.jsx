import React from "react";
import Form from "./Form";
import joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";
class NewForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInstock: "",
      dailyRentalRate: "",
    },
    genres: [],
    error: {},
  };

  schema = {
    _id: joi.string(),
    title: joi.string().required().label("Title"),
    genreId: joi.string().required().label("Genre"),
    numberInstock: joi
      .number()
      .required()
      .min(0)
      .max(100)
      .label("Number In Stock"),
    dailyRentalRate: joi
      .number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params._id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    console.log(movie);
    if (!movie) return this.props.history.replace("/addmovie");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInstock: movie.numberInstock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    saveMovie(this.state.data);

    this.props.history.push("/Movies");
  };
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleLogin}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInstock", "numberInstock", "Number")}
          {this.renderInput("dailyRentalRate", "dailyRentalRate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewForm;
