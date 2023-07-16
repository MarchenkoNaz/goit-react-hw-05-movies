import { getMoviesBySearch } from 'Helpers/requestToApi'
import React, { useEffect, useState } from 'react'

const SearchFilm = ({ handleSubmit, setSearchParams, searchQuery, setIsLoading }) => {
	const [currentFilms, setCurrentFilms] = useState([])
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!searchQuery) {
			return
		}
		(async () => {
			try {
				setIsLoading(true)
				const { results } = await getMoviesBySearch(searchQuery)
				return setCurrentFilms(results)
			}
			catch (err) {
				setError(err.message)
			}
			finally {
				setIsLoading(false)
			}
		})()
	}, [searchQuery])

	const onChange = ({ target: { value } }) => {
		setSearchParams({ 'search': value })
	}
	const onSubmit = (e) => {
		e.preventDefault()
		handleSubmit(currentFilms)
	}
	return (
		<>
			<form onSubmit={(e) => onSubmit(e)} autoComplete="off">
				<div className="input-group m-3 ">
					<input type="text" className="form-control" placeholder="Enter title of the film" aria-label="Enter title of the film" style={{ maxWidth: 250 }}
						aria-describedby="basic-addon2" value={searchQuery} onChange={onChange} required />
					<button className="input-group-text" id="basic-addon2">Search</button>
				</div>
			</form>
		</>
	)
}

export default SearchFilm