import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Modal from './Modal';
import MovieCreateForm from './MovieCreateForm'
import { createMovie } from '../actions';

const SideMenu = ({ appName, categories }) => {

    const router = useRouter()
    let modal = null

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            modal.closeModal()
            router.push('/')
        })
    }

    return (
        <>
            <Modal ref={element => modal = element} hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">{appName}</h1>
            <div className="list-group">
                {categories.map((category) => (
                    <a key={category.name} href="#" className="list-group-item">{category.name.substr(0, 1).toUpperCase() + category.name.substr(1, category.name.length).toLowerCase()}</a>
                ))}
            </div>
            <div>

            </div>
        </>
    )
}

export default SideMenu
