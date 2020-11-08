import React, { Component } from 'react'
import Router from 'next/router'
import { getMovieById, updateMovie } from '../../../actions';
import MovieCreateForm from '../../../components/MovieCreateForm';

export default class EditMovie extends Component {

    static async getInitialProps({ query }) {
        const movie = await getMovieById(query.id)
        return { movie }
    }

    handleUpdateMovie = (movie) => {
        updateMovie(movie).then((updatedMovie) => {

            Router.push(`/movies/${movie.id}`)
        })
    }

    render() {
        const { movie } = this.props

        return (
            <div className='container'>
                <h1>Modifier un film</h1>
                <MovieCreateForm
                    submitButton='Modifier'
                    initialData={movie}
                    handleFormSubmit={this.handleUpdateMovie} />
                <style jsx>{`
                      .container {
              padding-bottom: 150px;
            }
}          `}
                </style>
            </div>
        )
    }
}



