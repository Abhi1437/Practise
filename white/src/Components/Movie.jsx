import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from '../Components/Like';
import Pagination from '../Components/Pagination';
import _ from 'lodash';
import ListGenre from './ListGenre';
import { getGenres } from '../services/fakeGenreService';
class Movies extends Component {
    state = { 
        movies:getMovies(),
        pageSize:4,
        currentPage:1,
        selectedGenre:{name:"All Genres"},
        genre:getGenres(),
        movieList:getMovies()
     }

     
//Delete
     handleClick=(Movie)=>{
         let movies= this.state.movieList.filter(Mov=>Mov._id!==Movie._id)
         this.setState({ movieList:movies })
     }
    
     handlePage=(Page)=>{
         this.setState({currentPage:Page})
     }

     handlePaginate=(Page)=>{
        let end=Page*this.state.pageSize; 
        let start=end-this.state.pageSize;
        return _.slice(this.state.movieList,start,end)
         
     }

     HandleGenre=(genre)=>{
         const M= this.state.selectedGenre.type==="AA" ? this.state.movies: this.state.movies.filter(movie=>movie.genre._id===genre._id) ;
         
         this.setState({movieList:M,currentPage:1,selectedGenre:genre })
        
     }


     handleLike=(movie)=>{
        const movies=[...this.state.movies];
        const index= movies.indexOf(movie);
        movies[index]={...movies[index]};
        movies[index].liked=!(movies[index].liked);
        this.setState({
             movies
         });
       
     }
    render() { 
        const K=this.handlePaginate(this.state.currentPage);
        const Gen=[{_id:"abc",name:"All Genres", type:"AA"},...getGenres()];
        return ( 
            <div>
                <div className="row">
                <div className="col-2">
                    <h4><ListGenre types={Gen} selectedGenre={this.state.selectedGenre} onHandleGenre={this.HandleGenre} /></h4>
                </div>
                <div className="col">
                <h3>No of Movies : {this.state.movieList.length}</h3>
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {K.map(movie=>(<tr  key={movie._id}>
                                <td>{movie._id}</td>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>{movie.numberInStock}</td>
                                <td> <Like Movie={movie} handleLike={this.handleLike}/></td>
                               <th><button className="btn btn-danger" onClick={()=> this.handleClick(movie)}>DELETE</button></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination changePage={this.handlePage} currentPage={this.state.currentPage} totalItems={this.state.movieList.length} pageSize={this.state.pageSize}/>
                </main></div>
                </div>
                    
            </div>
         );
    }
}
 
export default Movies;
