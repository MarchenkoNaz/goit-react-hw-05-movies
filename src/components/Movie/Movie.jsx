import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import { getImagesFromApi } from 'Helpers/getImages';
import defaultPoster from 'images/default.png';

const Movie = ({ id, title, poster_path }) => {
	const location = useLocation();

	return (
		<li key={id} className='m-2'>
			<Link to={`/movies/${id}`} state={location}>
				<div className="card" style={{ width: '20rem', height: '45rem' }}>
					<img src={poster_path ? getImagesFromApi(poster_path) : defaultPoster} className="card-img-top" alt={title} />
					<div className="card-body d-flex align-items-center justify-content-center">
						<p className='display-6'>{title}</p>
					</div>
				</div>
			</Link>
		</li>
	);
};

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	poster_path: PropTypes.string,
};

export default Movie;
