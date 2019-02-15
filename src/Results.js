import React, { Component } from "react";
import { SearchContext } from "./SearchContext.js";
import "./Results.css";
import Person from "./Person";

export default class Results extends Component {
	static contextType = SearchContext;
	render() {
		return (
			<section className="results">
				{this.context.results.length > 0
					? this.context.results.map(result => Person(result))
					: ""}
			</section>
		);
	}
}
