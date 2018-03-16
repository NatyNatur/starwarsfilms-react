import React, { Component } from 'react';

const url = 'https://swapi.co/api/films/';
const filmEpisode = '3';

class ReturnoftheJedi extends Component {
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
				<h2>{this.state.title}</h2>
				<p>Episode: {this.state.episode_id}</p>
				<p>Director: {this.state.director}, Producer: {this.state.producer}</p>
				<p>{this.state.opening_crawl}</p>
			</div>
		);
	}
}

export default ReturnoftheJedi;