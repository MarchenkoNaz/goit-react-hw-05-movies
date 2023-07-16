import { getImagesFromApi } from 'Helpers/getImages'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import defaultPoster from 'images/default.png';


const Movie = ({ id, title, poster_path }) => {
	const location = useLocation()


	return (
		<Link to={`/movies/${id}`} state={location}>
			< li key={id} className='m-2' >
				<div className="card " style={{ width: '20rem', height: '45rem' }}>
					<img src={poster_path ? getImagesFromApi(poster_path) : defaultPoster} className="card-img-top" alt={title} />
					<div className="card-body d-flex align-items-center justify-content-center">
						<p className='display-6'>{title}</p>
					</div>
				</div>
			</li >
		</Link >
	)
}

export default Movie