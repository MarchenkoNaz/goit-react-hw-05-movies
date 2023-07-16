import React from 'react';
import PropTypes from 'prop-types';

import defaultAvatar from 'images/default.png';
import { getImagesFromApi } from 'Helpers/getImages';

const CastCard = ({ name, character, avatar }) => {
	return (
		<div>
			<img
				src={avatar ? getImagesFromApi(avatar) : defaultAvatar}
				style={{ width: 220, height: 330 }}
				alt={name}
			/>
			<h3>{name}</h3>
			<p>Character: {character || 'Not found'}</p>
		</div>
	);
};

CastCard.propTypes = {
	name: PropTypes.string.isRequired,
	character: PropTypes.string,
	avatar: PropTypes.string,
};

export default CastCard;
