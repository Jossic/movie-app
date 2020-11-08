import React, { useState } from 'react'

import SideMenu from '../components/SideMenu';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';


import { getMovies, getCategories } from '../actions';

const Home = ({ movies, images, categories }) => {

  const [filter, setFilter] = useState('tous')

  const changeCategory = (category) => {
    setFilter(category)
  }

  const filterMovies = (movies) => {
    if (filter === 'tous') {
      return movies
    }
    return movies.filter((movie) => {
      return movie.genre && movie.genre.includes(filter)
    })
  }

  return (
    <div>

      <div className='home-page'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu
                activeCategory={filter}
                changeCategory={changeCategory}
                appName={'Movie DB'}
                categories={categories}
              />
            </div>
            <div className="col-lg-9">
              <Carousel images={images} />
              <h1>Catégorie -> {filter}</h1>
              <div className="row">
                <MovieList movies={filterMovies(movies) || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const movies = await getMovies()
  const categories = await getCategories()
  const images = movies.map((movie) => ({
    id: `image-${movie.id}`,
    url: movie.image,
    alt: movie.name
  }))

  return {
    movies,
    images,
    categories
  }
}

export default Home