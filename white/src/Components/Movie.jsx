import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = { 
        movies:getMovies()
     }

     handleClick=(Movie)=>{
         let movies= this.state.movies.filter(Mov=>Mov._id!==Movie._id)
         this.setState({ movies })
     }
    render() { 
        return ( 
            <React.Fragment>
                    <h3>No of Movies : {this.state.movies.length}</h3>
                <main>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>Movie ID</th>
                                <th>Movie Name</th>
                                <th> Genre</th>
                                <th>Cost</th>
                                <th>Availability</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map(movie=>(<tr  key={movie._id}>
                                <td>{movie._id}</td>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>{movie.numberInStock}</td>
                               <th><button className="btn btn-danger" onClick={()=> this.handleClick(movie)}>DELETE</button></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </React.Fragment>
         );
    }
}
 
export default Movies;