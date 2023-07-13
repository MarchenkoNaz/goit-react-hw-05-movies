import { getTrending } from 'Helpers/requestToApi'
import Error from 'components/Error/Error';
import Movie from 'components/Movie/Movie';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

const HomePage = props => {
	const [trendingFilms, setTrendingFilms] = useState([]);
	const [error, setError] = useState(null);
	useEffect(() => {
		if (trendingFilms.length !== 0) {
			return
		}
		(async () => {
			try {
				const { results } = await getTrending()
				return setTrendingFilms(results)
			}
			catch (err) {
				setError(err.message)
			}
		})()
	}, [trendingFilms])

	return (
		<>
			<h1>Trending films</h1>
			<ul className='list-group d-flex flex-wrap flex-row justify-content-md-around '>
				{trendingFilms.map((film) => {
					return <Movie key={film.id} {...film} />
				})}
			</ul >
			{error && <Error err={error} />
			}
			<ToastContainer />
		</>
	)
}


export default HomePage