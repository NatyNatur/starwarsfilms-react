import React, { Component } from 'react';
import './styleData.css';

const url = 'https://swapi.co/api/films/';
const filmEpisode = '1';

class AnewHope extends Component {
	constructor({ movie }) {
		super();
		this.state = {
			title: null,
			episode_id: null,
			opening_crawl: null,
			director: null,
			producer: null,
			release_date: null,
		}
		console.log('Constructor');
	}

	componentWillMount() {
		fetch(`${url}${filmEpisode}`)
			.then(data => {
				console.log(data);
				return data.json();
			})
			.then(swapi_data => {
				const data = swapi_data
				this.setState({ title: swapi_data.title, episode_id: swapi_data.episode_id, opening_crawl: swapi_data.opening_crawl, director: swapi_data.director, producer: swapi_data.producer, release_date: swapi_data.release_date });
				console.log(this.state.title);
			})
	}
	render() {
		return (
			<div>
					<h1 className="episodeTitle">{this.state.title}</h1>
					<p className="episodeNum">Episode: <span className="dataSW">{this.state.episode_id}</span></p>
					<p>Director: <span className="dataSW">{this.state.director}</span>, Producer: <span className="dataSW">{this.state.producer}</span></p>	
					<p className="movieOpening">"{this.state.opening_crawl}"</p>			
			</div>
		);
	}
}

export default AnewHope;