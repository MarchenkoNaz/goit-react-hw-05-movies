import { getImagesFromApi } from 'Helpers/getImages'
import { getMovieDetails } from 'Helpers/requestToApi'
import React, { useEffect, useState } from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'

const MovieDetails = () => {
	const params = useParams();
	const [movie, setMovie] = useState({});
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		try {
			setIsLoading(true);
			(async () => setMovie(await getMovieDetails(params.id)))()

		}
		catch (err) {
			setError(err);
		}
		finally {
			setIsLoading(false);
		}
	}, [params.id])
	const { genres } = movie


	return (
		<>
			{movie && <div>
				<h1 className='display-6'>{movie.title} </h1>
				<div className='votes  '>
					<p className='fs-6 m-2 '>Average vote: {movie.vote_average}</p>
				</div>
				<div className='d-flex flex-wrap'>
					<img src={getImagesFromApi(movie.poster_path)} width={220} height={320} alt={movie.title} />
					<div className='description ms-4'>
						<div className='titles'>
							<div>
								<h3 className='display-6'>Original title:</h3>
								<p className='fs-6'> {movie.original_title}</p>
							</div>
							<div>
								<h3 className='display-6'>Tagline:</h3>
								<p className='fs-6 fst-italic'>'{movie.tagline}'</p>
							</div>
							<div className='genres'>
								<h3 className='display-6'>Genres</h3>
								<ul className='m-0 p-0 d-flex'>
									{genres && genres.map(genre => <li key={genre.name}><p className='m-2'>{genre.name}</p></li>)}
								</ul>
							</div>

						</div>
						<div className='releases '>
							<h3 className='display-6'>Status</h3>
							<div className='d-flex'>
								<p className='fs-6 m-2'>{movie.status}</p>
								<p className='fs-6 m-2'>{movie.release_date}</p>
							</div>
						</div>
					</div>
					<div className='overview'>
						<h3 className='display-6 m-2' >Overview</h3>
						<p className='fs-5 m-2'>{movie.overview}</p>
					</div>
				</div>
				<ul className='d-flex'>
					<li className='m-2 btn btn-dark'>
						<Link to={`/movies/${params.id}/cast`}>Cast</Link>
					</li>
					<li className='m-2 btn btn-dark'>
						<Link to={`/movies/${params.id}/reviews`}>Reviews</Link>
					</li>
				</ul>
				<Outlet />
			</div >

			}		</>
	)
}

export default MovieDetails

