// Lado izquierdo de la pantalla, muestra títulos y botonés de las películas
import React, { Component }from 'react';
import PageTitle from './PageTitle';
import MoviesOptions from './MoviesOptions';


class StaticPage extends Component {
    render() {
        return (
            <div>
                <p>Esta es la página estática</p>
                <PageTitle></PageTitle>
                <MoviesOptions></MoviesOptions>
            </div>
        )
    }
}

export default StaticPage;