import { getSimpleDate } from 'Helpers/getSimpleDate'
import { getImagesFromApi } from 'Helpers/getImages';
import React from 'react'
import defaultAvatar from 'images/default_user.png';


const ReviewCard = ({ author, avatar, username, content, created }) => {
	const urlOfPhotos = (url) => {
		if (url.startsWith('/https:/')) {

			return url.slice(1)
		}
		if (url.startsWith('/')) {
			return getImagesFromApi(url)
		}
	}
	return (
		<>
			<div className='m-5'>
				<div className='d-flex'>
					<img className="rounded-circle" src={avatar ? urlOfPhotos(avatar) : defaultAvatar} style={{ width: 50, height: 50 }} alt={author} />
					<div className='m-1'>
						<h3>{author}</h3>
						<p>{username}</p>
					</div>
				</div>
				<p>{content}</p>
				<p>Created: {getSimpleDate(created)}</p>
			</div>
		</>
	)
}

export default ReviewCard