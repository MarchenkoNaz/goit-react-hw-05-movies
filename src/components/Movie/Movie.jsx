import { getImagesFromApi } from 'Helpers/getImages'
import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({ id, title, poster_path }) => {
	return (
		<Link to={`/movies/${id}`} >
			< li key={id} className='m-2' >
				<div className="card " style={{ width: '20rem', height: '45rem' }}>
					<img src={getImagesFromApi(poster_path)} className="card-img-top" alt={title} />
					<div className="card-body d-flex align-items-center justify-content-center">
						<p className='display-6'>{title}</p>
					</div>
				</div>
			</li >
		</Link >
	)
}

export default Movie