import React, { Component } from "react";
import { SearchContext } from "./SearchContext.js";

export default class Search extends Component {
	static contextType = SearchContext;

	sendSearch = event => {
		// with validated input, send the search api call
		event.preventDefault();
		const BASE_URL = "https://swapi.co/api";

		const searchTerm = this.context.searchTerm;
		const searchType = this.context.searchType;
		this.context.toggleLoading();
		fetch(`${BASE_URL}/${searchType}/?search=${searchTerm}`, {
			method: "GET",
			headers: {
				"content-type": "application/json"
			}
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					this.context.updateErrorMessages(
						"Temporary error. Please wait, and then retry your query again."
					);
				}
			})
			.then(resJSON => {
				// const results = {results: resJSON}
				this.context.toggleLoading();
				this.context.updateResultType(searchType);
				this.context.updateResultNum(resJSON.count);
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
				<select
					className="filter-search-resource"
					onChange={e => this.context.updateSearchType(e.target.value)}>
					<option className="people" value="people">
						People
					</option>
					<option className="films" value="films">
						Films
					</option>
					<option className="starships" value="starships">
						Starships
					</option>
					<option className="vehicles" value="vehicles">
						Vehicles
					</option>
					<option className="species" value="species">
						Species
					</option>
					<option className="planets" value="planets">
						Planets
					</option>
				</select>
				<button type="submit">Submit</button>
			</form>
		);
	}
}
