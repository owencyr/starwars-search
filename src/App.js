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
		searchType: "people",
		resultType: "people",
		resultNum: null,
		loading: false,
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
		this.setState({ results: results.results });
	};

	//state CRUD nonrequired features
	updateSearchType = searchType => {
		this.setState({ searchType });
	};

	updateResultType = resultType => {
		this.setState({ resultType });
	};

	updateResultNum = resultNum => {
		this.setState({ resultNum });
	};

	toggleLoading = () => {
		this.setState({ loading: !this.state.loading });
	};

	nextPageResults(results) {
		//append next page of results to current state
		//can display just new page of results, or all results
		//will start with just showing new page of results
	}

	render() {
		const contextValue = {
			results: this.state.results,
			searchTerm: this.state.searchTerm,
			searchType: this.state.searchType,
			resultType: this.state.resultType,
			resultNum: this.state.resultNum,
			error: this.state.error,
			errorMessages: this.state.errorMessages,
			newResults: this.newResults,
			updateSearchTerm: this.updateSearchTerm,
			updateSearchType: this.updateSearchType,
			updateResultType: this.updateResultType,
			updateResultNum: this.updateResultNum,
			toggleLoading: this.toggleLoading
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
