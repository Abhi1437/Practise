import { Route, Link } from "react-router-dom";
import "./App.css";
import Movie from "./Components/Movie";
import Home from "./Components/Home";
import MovieForm from "./Components/MovieForm";
import RegisterForm from "./Components/RegisterForm";
import NewForm from "./Components/NewForm";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/Home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Movies" className="nav-link">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Register" className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="cointainer">
        <Route path="/Movies" component={Movie} />
        <Route path="/Home" component={Home} />
        <Route path="/MovieForm/:movietitle" component={MovieForm} />
        <Route path="/Register" component={RegisterForm} />
        <Route path="/addmovie" component={NewForm} />
      </div>
    </div>
  );
}

export default App;
