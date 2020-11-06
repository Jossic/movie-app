import React, { useState } from 'react'


const SideMenu = ({ appName, categories }) => {
    return (
        <>
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
