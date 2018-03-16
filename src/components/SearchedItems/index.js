// Lado derecho de la pantalla, contenedor de las 'tarjetas' de películas
import React, { Component }from 'react';
import MovieDisplay from './MovieDisplay';


class SearchedItems extends Component {
    render() {
        return (
            <div>
                <MovieDisplay> </MovieDisplay>
            </div>
        )
    }
}

export default SearchedItems;