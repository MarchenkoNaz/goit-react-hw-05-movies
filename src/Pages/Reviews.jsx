import { getMovieReviews } from 'Helpers/requestToApi';
import ReviewCard from 'components/ReviewCard/ReviewCard';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Reviews = () => {
	const [review, setReview] = useState([]);
	const [error, setError] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchReview = async () => {
			try {

				const { results } = await getMovieReviews(id);
				const newReview = results.map(({ id, author, author_details: { avatar_path, username }, content, created_at }) => ({
					id,
					author,
					username,
					avatar_path,
					content,
					created_at
				}));

				setReview(newReview);
			} catch (error) {
				console.log(error);
				setError(error);
			}
		};

		fetchReview();
	}, [id]);
	return (
		<>
			{review.length !== 0 ? <ul className='list-group d-flex flex-wrap flex-row justify-content-md-around '>
				{review.map(({ id, author, username, avatar_path, content, created_at }) => (
					<li key={id}>
						<ReviewCard
							author={author}
							username={username}
							content={content}
							avatar={avatar_path}
							created={created_at}
						/>
					</li>
				))}
			</ul> : <p className='display-3'>No reviews</p>}
		</>
	)
}

export default Reviews