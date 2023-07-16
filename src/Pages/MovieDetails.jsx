import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

import { LinearProgress } from '@mui/material';
import { getImagesFromApi } from 'Helpers/getImages';
import { getMovieDetails } from 'Helpers/requestToApi';
import Error from 'components/Error/Error';
import defaultAvatar from 'images/default.png';

const MovieDetails = () => {
	const params = useParams();
	const location = useLocation();
	const [movie, setMovie] = useState({});
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				setIsLoading(true);
				const movieData = await getMovieDetails(params.id);
				setMovie(movieData);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchMovieDetails();
	}, [params.id]);

	const { genres } = movie;

	return (
		<>
			<Link to={location.state} className='btn btn-dark m-2'>
				Back
			</Link>

			{isLoading && <LinearProgress />}
			{error && <Error err={error.message} />}

			{movie && (
				<div>
					<h1 className='display-6'>{movie.title} </h1>
					<div className='votes'>
						<p className='fs-6 m-2'>Average vote: {movie.vote_average}</p>
					</div>
					<div className='d-flex flex-wrap'>
						<img
							src={movie.poster_path ? getImagesFromApi(movie.poster_path) : defaultAvatar}
							width={220}
							height={320}
							alt={movie.title}
						/>
						<div className='description ms-4'>
							<div className='titles'>
								<div>
									<h3 className='display-6'>Original title:</h3>
									<p className='fs-6'> {movie.original_title}</p>
								</div>
								{movie.tagline && (
									<div>
										<h3 className='display-6'>Tagline:</h3>
										<p className='fs-6 fst-italic'>'{movie.tagline}'</p>
									</div>
								)}
								{genres && (
									<div className='genres'>
										<h3 className='display-6'>Genres</h3>
										<ul className='m-0 p-0 d-flex'>
											{genres.map(genre => (
												<li key={genre.name}>
													<p className='m-2'>{genre.name}</p>
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
							{movie.status && (
								<div className='releases'>
									<h3 className='display-6'>Status</h3>
									<div className='d-flex'>
										<p className='fs-6 m-2'>{movie.status}</p>
										<p className='fs-6 m-2'>{movie.release_date}</p>
									</div>
								</div>
							)}
						</div>
						<div className='overview'>
							<h3 className='display-6 m-2'>Overview</h3>
							<p className='fs-5 m-2'>{movie.overview}</p>
						</div>
					</div>
					<ul className='d-flex'>
						<li className='m-2 btn btn-dark'>
							<Link to={`/movies/${params.id}/cast`} state={location.state}>
								Cast
							</Link>
						</li>
						<li className='m-2 btn btn-dark'>
							<Link to={`/movies/${params.id}/reviews`} state={location.state}>
								Reviews
							</Link>
						</li>
					</ul>
					<Outlet />
				</div>
			)}
		</>
	);
};

MovieDetails.propTypes = {
	id: PropTypes.string,
};

export default MovieDetails;
