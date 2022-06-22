import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

export const Movie = () => {

    const [movieInfo, setMovieInfo] = useState({})

    const id = useParams();

     useEffect(() => {
       axios.get(`http://localhost:8080/movies/${id}`).then((res) => {
         console.log(res.data);
         setMovieInfo(res.data);
       });
     }, []);
    return(
        <div>
            Movie
        </div>
    )
}