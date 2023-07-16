import { LinearProgress } from '@mui/material'
import Movie from 'components/Movie/Movie'
import SearchFilm from 'components/SearchFilm/SearchFilm'
import React, { useCallback, useState } from 'react'
import { startTransition } from 'react'
import { useSearchParams } from 'react-router-dom'

const Movies = () => {
	const [currentFilm, setCurrentFilm] = useState([]);
	// const [filteredList, setFilteredList] = useState([])
	const [searchParams, setSearchParams] = useSearchParams();
	const [isLoading, setIsLoading] = useState(false)

	const searchQuery = searchParams.get('search') ?? ''

	// useEffect(() => {
	// 	currentFilm && setFilteredList(currentFilm.filter(film => film.title.toLowerCase().includes(searchQuery.toLowerCase())))
	// }, [currentFilm, searchParams, searchQuery])

	const handleSubmit = (filmArr) => {
		startTransition(() => setCurrentFilm(filmArr))
	}
	const handleSetIsLoading = useCallback((value) => {
		setIsLoading(value);
	}, []);


	return (
		< >
			<SearchFilm handleSubmit={handleSubmit} setSearchParams={setSearchParams} searchQuery={searchQuery} setIsLoading={handleSetIsLoading} />

			{isLoading && <LinearProgress />}
			{currentFilm ? <ul className='list-group d-flex flex-wrap flex-row justify-content-md-around '>
				{currentFilm.map((film) => {
					return <Movie key={film.id} {...film} />
				})}
			</ul > : <p className='display-6'>There isn't any films with this title</p>}

		</>

	)
}

export default Movies