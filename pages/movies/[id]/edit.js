import React, { Component } from 'react'
import { getMovieById } from '../../../actions';
import MovieCreateForm from '../../../components/MovieCreateForm';

export default class EditMovie extends Component {

    static getInitialProps({ query }) {
        return { query }
    }

    state = {
        movie: {}
    }

    componentDidMount() {
        const { id } = this.props.query
        getMovieById(id).then(movie => {
            this.setState({ movie })
        })
    }

    render() {
        return (
            <div className='container'>
                <h1>Modifier un film</h1>
                {JSON.stringify(this.state.movie)}
                <MovieCreateForm />
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



