import { useRouter } from 'next/router';
import { getMovieById, deleteMovie } from '../../actions';

const Movie = ({ movie }) => {
    const router = useRouter()
    const { id } = router.query
    // const { movie } = props

    const handleDelete = (id) => {
        deleteMovie(id).then(() => {

            router.push('/')
        })
    }

    return (
        <div className='container'>
            <div className="jumbotron">
                <h1 className="display-4">{movie.name}</h1>
                <p className="lead">{movie.description}</p>
                <hr className="my-4" />
                <p>{movie.genre}</p>
                <p className="lead">
                    <button className="btn btn-primary btn-lg" href="#" role="button">En savoir plus</button>
                    <button onClick={() => handleDelete(id)} className="btn btn-danger btn-lg ml-1" href="#" role="button">Supprimer</button>
                </p>
            </div>
            <p className='desc-text'>
                {movie.longDescription}
            </p>
            <style jsx>{`
            .desc-text{
                font-size: 19px;
            }
            `}</style>
        </div>
    )
}

Movie.getInitialProps = async ({ query }) => {
    const movie = await getMovieById(query.id)

    return { movie }
}

export default Movie


