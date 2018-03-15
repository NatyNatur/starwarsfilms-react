// Botones de películas
import React, { Component } from 'react';
import { Button } from 'reactstrap';


class MovieOptions extends Component {
    render() {
        return (
            <div>
                <Button className="movieOption" color="info" size="lg" block id="1">A new Hope</Button>{' '}
                <Button className="movieOption" color="info" size="lg" block id="2">The Empire Strikes Back</Button>{' '}
                <Button className="movieOption" color="info" size="lg" block id="3">Return of the Jedi</Button>{' '}
                <Button className="movieOption" color="info" size="lg" block id="4">The Phantom Menace</Button>{' '}
                <Button className="movieOption" color="info" size="lg" block id="5">Attack of the Clones</Button>{' '}
                <Button className="movieOption" color="info" size="lg" block id="6">Revenge of the Sith</Button>{' '}
                <Button className="movieOption" color="info" size="lg" block id="7">The Force Awakens</Button>{' '}
                
            </div>
        )
    }
}

export default MovieOptions;