import React, { Component } from "react";
import "./App.css";
import { SearchContext } from "./SearchContext.js";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";

export default class App extends Component {
	state = {
		results: [],
		searchTerm: "",
		error: false,
		errorMessages: {
			searchInputExists: "",
			searchInputType: ""
		}
	};

	//state CRUD required (replace old results display)
	updateSearchTerm = searchTerm => {
		this.setState({ searchTerm });
	};

	newResults = results => {
		debugger;
		this.setState({ results });
	};

	//state CRUD nonrequired features
	nextPageResults(results) {
		//append next page of results to current state
		//can display just new page of results, or all results
		//will start with just showing new page of results
	}

	render() {
		const contextValue = {
			results: this.state.results,
			searchTerm: this.state.searchTerm,
			error: this.state.error,
			errorMessages: this.state.errorMessages,
			newResults: this.newResults,
			updateSearchTerm: this.updateSearchTerm
		};

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
