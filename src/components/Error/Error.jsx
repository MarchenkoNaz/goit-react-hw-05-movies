import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const Error = ({ err }) => {
	return <>
		{toast.error(err)}
	</>;
};

Error.propTypes = {
	err: PropTypes.string.isRequired,
};

export default Error;
