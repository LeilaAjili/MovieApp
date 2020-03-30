import React, { Component } from 'react';
import MovieCard from './movieCard';
import Modals from './add'


import './movieList.css';
 

class MovieList extends Component {

   
        
            
        
    render(){

    
        return (
            
            this.props.movies.map((elm, i) => (
                
                  <MovieCard
                    elm={elm}
                    label={i+1} />
                
                  
                   
                  
                )
            )


                   
            
                
        )

   
    
}}


export default MovieList