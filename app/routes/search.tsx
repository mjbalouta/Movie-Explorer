import { useLoaderData } from "react-router";
import type { Movie } from "~/types/movie";

export async function loader({ request }: { request: Request }) {

	const url = new URL(request.url);

	const query = url.searchParams.get("q");

	const apiKey = process.env.OMDB_API_KEY; //the key remains ALWAYS in the server (loader runs in server)
	console.log("apiKey", apiKey);

	const response = await fetch(
		`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
	);

	const data = await response.json();

	return data;
}

export default function Search() {

	const data = useLoaderData<typeof loader>();
	console.log(data);

	if (data.Response === "False")
		return <p>{data.Error}</p>;

	return (
		<div>
			<h1>Search results</h1>
			{data.Search.map((movie: Movie) => (
				<div>
					<p key={movie.imdbID}>{movie.Title}</p>
					<img src={movie.Poster}></img>
				</div>
			))}
		</div>
	);
}