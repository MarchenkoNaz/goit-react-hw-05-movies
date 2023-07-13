import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'e0723ed903f05e10ff2c0d0ee3dce9dc';

const defaultParams = {
	api_key: API_KEY,
};

export const getTrending = async () => {
	try {
		const res = await axios.get('/trending/movie/day', { params: defaultParams });
		return res.data;
	} catch (err) {
		return toast.error(err.message)
	}
};

export const getMovieDetails = async (id) => {
	try {
		const res = await axios.get(`/movie/${id}`, { params: defaultParams });

		return res.data;
	} catch (err) {
		return toast.error(err.message)
	}
};

export const getMovieCredits = async (id) => {
	try {
		const res = await axios.get(`/movie/${id}/credits`, { params: defaultParams });

		return res.data;
	} catch (err) {
		return toast.error(err.message)
	}
}
export const getMovieReviews = async (id) => {
	try {
		const res = await axios.get(`/movie/${id}/reviews`, { params: defaultParams });

		return res.data;
	} catch (err) {
		return toast.error(err.message)
	}
}
getMovieReviews(447365)
getMovieCredits(447365)
