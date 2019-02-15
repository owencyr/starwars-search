import React, { Component } from "react";
import "./App.css";
import { SearchContext } from "./SearchContext.js";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";

class App extends Component {
	state = {
		results: [],
		searchTerm: "",
		error: false,
		errorMessages: {
			searchInputExists: "",
			searchInputType: ""
		}
	};
	render() {
		const contextValue = {};
		return (
			<section className="starwars-search">
				<Header />
				<SearchContext.Provider value={contextValue}>
					<Search />
					<Results />
				</SearchContext.Provider>
			</section>
		);
	}
}

export default App;
