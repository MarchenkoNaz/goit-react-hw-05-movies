import HomePage from "Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Movies from "Pages/Movies";
import Layout from "./Layout/Layout";
import 'react-toastify/dist/ReactToastify.css';
import MovieDetails from "Pages/MovieDetails";
import Cast from "../Pages/Cast";
import Reviews from "Pages/Reviews";

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />} >
				<Route index element={<HomePage />} />
				<Route path="movies" element={<Movies />} />
				<Route path="movies/:id" element={<MovieDetails />} >
					<Route path="cast" element={<Cast />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
			</Route>
		</Routes>

	);
};
