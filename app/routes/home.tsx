import Header from "~/components/Header";
import type { Route } from "./+types/home";
import Searchbar from "~/components/Searchbar";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "Movie Explorer" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<>
			<Header />
			<Searchbar />
		</>
	)
}
