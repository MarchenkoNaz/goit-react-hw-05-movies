import { getMovieCredits } from 'Helpers/requestToApi';
import CastCard from 'components/CastCard/CastCard';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Cast = () => {
	const [cast, setCast] = useState([]);
	const [error, setError] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchCast = async () => {
			try {

				const { cast } = await getMovieCredits(id);
				const newCast = cast.map(({ id, name, character, profile_path }) => ({
					id,
					name,
					character,
					profile_path,
				}));

				setCast(newCast);
			} catch (error) {
				console.log(error);
				setError(error);
			}
		};

		fetchCast();
	}, [id]);
	return (<>
		<ul className='list-group d-flex flex-wrap flex-row justify-content-md-around '>
			{cast.map(({ id, name, character, profile_path }) => (
				<li key={id}>
					<CastCard
						name={name}
						character={character}
						avatar={profile_path}
					/>
				</li>
			))}
		</ul>
	</>)
}

export default Cast