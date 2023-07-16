import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// import Layout from "./Layout/Layout";
// import HomePage from "Pages/HomePage";

const Layout = lazy(() => import("./Layout/Layout"))
const HomePage = lazy(() => import("Pages/HomePage"))
const Movies = lazy(() => import("Pages/Movies"))
const MovieDetails = lazy(() => import("Pages/MovieDetails"))
const Cast = lazy(() => import("Pages/Cast"))
const Reviews = lazy(() => import("Pages/Reviews"))

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Suspense><Layout /></Suspense>} >
				<Route index element={<Suspense><HomePage /></Suspense>} />
				<Route path="movies" element={<Suspense><Movies /></Suspense>} />
				<Route path="movies/:id" element={<Suspense><MovieDetails /></Suspense>} >
					<Route path="cast" element={<Suspense><Cast /></Suspense>} />
					<Route path="reviews" element={<Suspense><Reviews /></Suspense>} />
				</Route>
			</Route>
		</Routes>

	);
};
