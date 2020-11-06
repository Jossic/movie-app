

const MovieCreateForm = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Lord of the Rings" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Descriptif</label>
                <input type="text" className="form-control" id="description" placeholder="Somewhere in Middle-earth..." />
            </div>
            <div className="form-group">
                <label htmlFor="description">Note</label>
                <input type="number" max="5" min="0" className="form-control" id="rating" placeholder="3" />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="text" className="form-control" id="image" placeholder="http://....." />
            </div>
            <div className="form-group">
                <label htmlFor="cover">Couverture</label>
                <input type="text" className="form-control" id="cover" placeholder="http://......" />
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Descriptif long</label>
                <textarea className="form-control" id="longDesc" rows="3"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select multiple className="form-control" id="genre">
                    <option>drama</option>
                    <option>music</option>
                    <option>adventure</option>
                    <option>historical</option>
                    <option>action</option>
                </select>
            </div>
        </form>
    )
}

export default MovieCreateForm
