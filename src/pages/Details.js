import React, { Component } from 'react'
import PropTypes from 'prop-types'

const API_KEY = '4287ad07';


export class Details extends Component {
    static propTypes = {
        id: PropTypes.string
    }

    state = { movie: {} }

    _fetchMovie({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log({ movie })
                this.setState({ movie })

            })
    }

    _goBack() {
        window.history.back()
    }

    componentDidMount() {
        const { id } = this.props
        this._fetchMovie({ id })
    }

    render() {
        const { Title, Poster, Genre, Actors, Director, Metascore, Plot } = this.state.movie
        return (
            <div>
                <div>
                    <button onClick={this._goBack} className="button is-info">Volver</button>
                </div>

                <h1>{Title}</h1>
                <img src={Poster} />
                <div>
                    <span>{Genre}</span>
                    <h3>{Director}</h3>
                    <h3>{Actors}</h3>
                    <span>{Metascore}</span>
                    <p>{Plot}</p>
                </div>

            </div>
        )

    }
}