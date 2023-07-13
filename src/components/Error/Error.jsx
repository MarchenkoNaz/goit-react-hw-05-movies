import React from 'react'
import { toast } from 'react-toastify'

const Error = (err) => {
	return (
		<>
			{toast.error(err)}
		</>
	)
}

export default Error