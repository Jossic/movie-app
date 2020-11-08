import React, { Component } from 'react'
import { getMovieById } from '../../../actions';
import MovieCreateForm from '../../../components/MovieCreateForm';

export default class EditMovie extends Component {

    // static getInitialProps({ query }) {
    //     getMovieById(id)
    //     return { query }
    // }

    static async getInitialProps({ query }) {
        const movie = await getMovieById(query.id)

        return { movie }
    }

    // state = {
    //     movie: {
    //         name: '',
    //         description: '',
    //         rating: '',
    //         image: '',
    //         cover: '',
    //         longDescription: '',
    //     }
    // }

    // componentDidMount() {
    //     const { id } = this.props.query
    //     getMovieById(id).then(movie => {
    //         this.setState({ movie })
    //     })
    // }

    render() {
        const { movie } = this.props

        return (
            <div className='container'>
                <h1>Modifier un film</h1>
                {/* {JSON.stringify(this.state.movie)} */}
                <MovieCreateForm initialData={movie} />
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



