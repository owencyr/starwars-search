import React, { Component } from "react";
import { SearchContext } from "./SearchContext.js";
import "./Results.css";
import Person from "./Person";
import Planet from "./Planet";

export default class Results extends Component {
	static contextType = SearchContext;
	render() {
		return (
			<section className="results">
				{this.context.results.length > 0 && this.context.resultType === "people"
					? this.context.results.map(result => Person(result))
					: ""}
				{this.context.results.length > 0 &&
				this.context.resultType === "planets"
					? this.context.results.map(result => Planet(result))
					: ""}
			</section>
		);
	}
}
