import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMoviesBySearch } from 'Helpers/requestToApi';
import Error from 'components/Error/Error';

const SearchFilm = ({ handleSubmit, setSearchParams, searchQuery, setIsLoading }) => {
	const [currentFilms, setCurrentFilms] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!searchQuery) {
			return;
		}
		(async () => {
			try {
				setIsLoading(true);
				const { results } = await getMoviesBySearch(searchQuery);
				setCurrentFilms(results);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [searchQuery]);

	const onChange = ({ target: { value } }) => {
		setSearchParams({ search: value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		handleSubmit(currentFilms);
	};

	return (
		<>
			{error && <Error />}
			<form onSubmit={onSubmit} autoComplete="off">
				<div className="input-group m-3">
					<input
						type="text"
						className="form-control"
						placeholder="Enter title of the film"
						aria-label="Enter title of the film"
						style={{ maxWidth: 250 }}
						aria-describedby="basic-addon2"
						value={searchQuery}
						onChange={onChange}
						required
					/>
					<button className="input-group-text" id="basic-addon2">
						Search
					</button>
				</div>
			</form>
		</>
	);
};

SearchFilm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	setSearchParams: PropTypes.func.isRequired,
	searchQuery: PropTypes.string.isRequired,
	setIsLoading: PropTypes.func.isRequired,
};

export default SearchFilm;
