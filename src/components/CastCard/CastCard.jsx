import { getImagesFromApi } from 'Helpers/getImages'
import React from 'react'
import defaultAvatar from 'images/default.png';

const CastCard = ({ name, character, avatar }) => {
	return (
		<div >
			<img src={avatar ? getImagesFromApi(avatar) : defaultAvatar} style={{ width: 220, height: 330 }} alt={name} />
			<h3>{name}</h3>
			<p>Character: {character || "Not found"}</p>
		</div>

	)
}

export default CastCard