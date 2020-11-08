import { useEffect, useState } from "react"


const MovieCreateForm = (props) => {

    const defaultData = {
        name: '',
        description: '',
        rating: '',
        image: '',
        cover: '',
        longDescription: '',
    }

    const formData = props.initialData ? { ...props.initialData } : defaultData
    const [form, setForm] = useState(formData)

    const handleChange = (e) => {
        const target = e.target
        const name = target.name

        setForm({
            ...form,
            [name]: target.value
        })
    }

    const handleGenreChange = (e) => {
        const { options } = e.target
        const optionsLength = options.length
        let value = []

        for (let i = 0; i < optionsLength; i++) {
            if (options[i].selected) {
                value.push(options[i].value)
            }
        }
        setForm({
            ...form,
            genre: value.toString()
        })
    }

    const submitForm = () => {
        props.handleFormSubmit({ ...form })
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                    onChange={handleChange}
                    value={form.name}
                    name='name'
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Lord of the Rings" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Descriptif</label>
                <input
                    onChange={handleChange}
                    value={form.description}
                    name="description"
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Somewhere in Middle-earth..." />
            </div>
            <div className="form-group">
                <label htmlFor="description">Note</label>
                <input
                    onChange={handleChange}
                    value={form.rating}
                    name="rating"
                    type="number"
                    max="5"
                    min="0"
                    className="form-control"
                    id="rating"
                    placeholder="3" />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                    onChange={handleChange}
                    value={form.image}
                    name="image"
                    type="text"
                    className="form-control"
                    id="image"
                    placeholder="http://....." />
            </div>
            <div className="form-group">
                <label htmlFor="cover">Couverture</label>
                <input
                    onChange={handleChange}
                    value={form.cover}
                    name="cover"
                    type="text"
                    className="form-control"
                    id="cover"
                    placeholder="http://......" />
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Descriptif long</label>
                <textarea
                    onChange={handleChange}
                    value={form.longDescription}
                    name="longDescription"
                    className="form-control"
                    id="longDesc"
                    rows="3"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select
                    onChange={handleGenreChange}
                    multiple
                    className="form-control"
                    id="genre">
                    <option>drama</option>
                    <option>action</option>
                    <option>comedie</option>
                    <option>sci-fi</option>
                    <option>romantique</option>
                    <option>animation</option>
                    <option>enfants</option>
                </select>
            </div>
            <button
                onClick={submitForm}
                type="button"
                className="btn btn-primary">{props.submitButton || 'Créer'}</button>
        </form>
    )
}

export default MovieCreateForm
