import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function MessengerSearchBar() {
	return (
		<div className="messenger__searchBar">
			<input type="text" className="search__input" placeholder="Search..." />
			<FontAwesomeIcon icon={faSearch} className="search__icon" />
		</div>
	);
}

export default MessengerSearchBar;
