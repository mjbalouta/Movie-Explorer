import "./Searchbar.css"
import { IoSearch } from "react-icons/io5";


function Searchbar() {
	return (
		<div className="searchbar">
			<div className="search-container">
				<IoSearch className="search-icon" />
				<input className="search" type="search" placeholder="Search a movie"></input>
			</div>
		</div>
	)
}

export default Searchbar;