import React, { Component } from "react";
import { SearchContext } from "./SearchContext.js";

export default class Search extends Component {
	static contextType = SearchContext;

	sendSearch = event => {
		// with validated input, send the search api call
		event.preventDefault();
		const BASE_URL = "https://swapi.co/api";

		const searchTerm = this.context.searchTerm;
		fetch(`${BASE_URL}/people/?search=${searchTerm}`, {
			method: "GET",
			headers: {
				"content-type": "application/json"
			}
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					this.context.errorMessages = "we have a problem";
				}
			})
			.then(resJSON => {
				// const results = {results: resJSON}
				debugger;
				this.context.newResults(resJSON);
			});
	};
	render() {
		return (
			<form className="search" onSubmit={event => this.sendSearch(event)}>
				<label htmlFor="search-input">Search:</label>
				<input
					type="text"
					className="search-input"
					name="input"
					onChange={e => this.context.updateSearchTerm(e.target.value)}
				/>
				<select className="filter-search-resource">
					<option className="people" name="people">
						People
					</option>
				</select>
				<button type="submit">Submit</button>
			</form>
		);
	}
}
