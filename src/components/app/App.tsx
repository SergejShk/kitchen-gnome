import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import SharedLayout from "../common/SharedLayout";

const HomePage = lazy(() => import("../home/HomePage"));
const ErrorPage = lazy(() => import("./ErrorPage"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: <SharedLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
]);
