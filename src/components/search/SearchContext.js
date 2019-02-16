import React from "react";

const SearchContext = React.createContext({
	results: [],
	searchTerm: "",
	error: false,
	errorMessages: {
		searchInputExists: "",
		searchInputType: ""
	},
	updateSearchTerm: () => {},
	addResults: () => {}
});

export { SearchContext };
