import { Form } from "react-router";
import "./Searchbar.css"
import { IoSearch } from "react-icons/io5";


function Searchbar() {
	return (
		<Form method="get" action="/search" className="searchbar">
			<div className="search-container">
				<IoSearch className="search-icon" />
				<input className="search" type="text" name="q" placeholder="Search a movie"></input>
			</div>
			<button className="search-btn" type="submit">Search</button>
		</Form>
	)
}

export default Searchbar;