// Botones de películas
import React, { Component } from 'react';
import { Button } from 'reactstrap';


class MovieOptions extends Component {
    render() {
        return (
            <div>
                <Button color="info" size="lg" block>A new Hope</Button>{' '}
                <Button color="info" size="lg" block>The Empire Strikes Back</Button>{' '}
                <Button color="info" size="lg" block>Return of the Jedi</Button>{' '}
                <Button color="info" size="lg" block>The Phantom Menace</Button>{' '}
                <Button color="info" size="lg" block>Attack of the Clones</Button>{' '}
                <Button color="info" size="lg" block>Revenge of the Sith</Button>{' '}
                <Button color="info"size="lg" block>info</Button>{' '}
                
            </div>
        )
    }
}

export default MovieOptions;