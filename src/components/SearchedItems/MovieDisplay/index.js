// 'tarjetas' de las películas
import React, { Component }from 'react';

const url = 'https://swapi.co/api/films/';
const filmEpisode = '1';

class MovieDisplay extends Component {
	constructor ({movie}) {
		super();
		// toma el estado del componente en ese punto de tiempo
		// set.state los puede setear y entregarle datos nuevos
		this.state = {
			movie,
			data: null
		}
		console.log('Constructor');
	}

	componentWillMount() {
    console.log('ComponentWillMount');
    const api_sw = `${url}${filmEpisode}`;
		fetch(api_sw)
		.then(data => {
            return data.json();
		})
		.then(data => {
            console.log(data);
		})
	}
	componentDidMount() {
		console.log('ComponentDidMount');
	}
    	render = () => {
        console.log('Render');
        const { moviesInfo } = this.props;
        // aquí integrar datos de la api
        return (
            <div>
							<p>Movie details</p>
            </div>
        )
	}
}

export default MovieDisplay;