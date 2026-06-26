import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App"
import { MovieDetails } from "@/components/MovieDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App
    },
    {
        path: "/movie/:id",
        Component: MovieDetails
    }
]);

export function Routes() {
    return <RouterProvider router={router} />;
}
