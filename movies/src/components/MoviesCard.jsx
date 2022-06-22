import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const MoviesCard = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [sort, setSort] = useState(0);

// API fetch from JSON server 
  useEffect(() => {
    axios.get("http://localhost:8080/movies").then((res) => {
      console.log(res.data);
      setMoviesData(res.data);
      
    });
  }, []);

// sorting function for fetching data by rating on UI 
  const handleSort = () => {

    // condition checking if button is clicked then show data according to it (Asc or dec) 
    if(sort%2 === 0){
        moviesData.sort((a,b) => a.rating - b.rating);
        setSort(sort + 1)
    }else{
        moviesData.sort((b, a) => a.rating - b.rating);
        setSort(sort + 1);
    }

    setMoviesData(moviesData);
  }

  return (
    <div>

      <h1 id="heading">Movies Card</h1>

      {/* Sorting Button  */}
      <h3 className="sorting" onClick={handleSort}>
        Sort By Rating
      </h3>
      <div id="container">
        {/* looping over data coming from API and rendering on UI  */}
        {moviesData.map((elem) => {
          return (
            <div key={elem.id} className="movieContainer">
             
              <h2> Title </h2> <h1 className="info"> {elem.title} </h1>
              <h2> Rating </h2> <h1 className="info">{elem.rating}</h1>
              <h2> Release Date </h2>{" "}
              <h1 className="info">{elem.releaseDate}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
