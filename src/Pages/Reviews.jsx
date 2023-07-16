import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Error from 'components/Error/Error';
import { LinearProgress } from '@mui/material';
import { getMovieReviews } from 'Helpers/requestToApi';
import ReviewCard from 'components/ReviewCard/ReviewCard';

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				setLoading(true);
				const { results } = await getMovieReviews(id);
				const newReviews = results.map(({ id, author, author_details: { avatar_path, username }, content, created_at }) => ({
					id,
					author,
					username,
					avatar: avatar_path,
					content,
					created: created_at
				}));

				setReviews(newReviews);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchReviews();
	}, [id]);

	return (
		<>
			{error && <Error err={error.message} />}
			{isLoading ? <LinearProgress /> : <ul className='list-group d-flex flex-wrap flex-row justify-content-md-around'>

				{reviews.length !== 0 ?
					reviews.map(({ id, author, username, avatar, content, created }) => (
						<li key={id}>
							<ReviewCard
								author={author}
								username={username}
								content={content}
								avatar={avatar}
								created={created}
							/>
						</li>
					)) : <p className='display-6'>No reviews</p>

				}

			</ul>}


		</>
	);
};



export default Reviews;
