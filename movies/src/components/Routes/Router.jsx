import {Route, Routes} from 'react-router-dom'
import { Movie } from '../Movie'

export const Router = () => {
    return(
        <>
        <Routes>
            <Route path='/movie' element={ <Movie/> } />
        </Routes>
        </>
    )
}