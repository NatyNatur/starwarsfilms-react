// Lado izquierdo de la pantalla, muestra títulos y botonés de las películas
import React, { Component }from 'react';

import MoviesOptions from './MoviesOptions';
import Logo from '../Static/PageTitle/Logo';


class StaticPage extends Component {
    render() {
        return(
            <div className="container">
                       
                <header className="header">
                  <Logo />
                </header>
                <section className="content">              
              <MoviesOptions></MoviesOptions>
                </section>
              </div>
      )
    }
}

export default StaticPage;