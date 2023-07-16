import { LinearProgress } from '@mui/material';
import { getMovieCredits } from 'Helpers/requestToApi';
import CastCard from 'components/CastCard/CastCard';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cast = () => {
	const [cast, setCast] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const { id } = useParams();

	useEffect(() => {
		const fetchCast = async () => {
			try {
				setIsLoading(true)
				const { cast } = await getMovieCredits(id);
				const newCast = cast.map(({ id, name, character, profile_path }) => ({
					id,
					name,
					character,
					profile_path,
				}));

				setCast(newCast);
			} catch (err) {
				setError(err);
			}
			finally {
				setIsLoading(false)
			}
		};

		fetchCast();
	}, [id]);
	return (<>
		{error && toast.error(error)}
		{isLoading ? <LinearProgress /> : <ul className='list-group d-flex flex-wrap flex-row justify-content-md-around '>
			{cast.length !== 0 ? cast.map(({ id, name, character, profile_path }) => (
				<li key={id}>
					<CastCard
						name={name}
						character={character}
						avatar={profile_path}
					/>
				</li>
			)) : <p className='display-6'>No cast members</p>}
		</ul>}

	</>)
}

export default Cast