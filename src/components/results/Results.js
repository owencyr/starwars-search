import React, { Component } from "react";
import { SearchContext } from "../search/SearchContext.js";
import "./Results.css";
import Person from "./resultTypes/Person";
import Film from "./resultTypes/Film";
import Starship from "./resultTypes/Starship";
import Vehicle from "./resultTypes/Vehicle";
import Species from "./resultTypes/Species";
import Planet from "./resultTypes/Planet";

export default class Results extends Component {
	static contextType = SearchContext;
	render() {
		return (
			<section className="results">
				{/* loading bar */}
				{this.context.loading ? "Loading..." : ""}
				{/* support for result = 0 */}
				{this.context.resultNum === 0 ? "No matches." : ""}
				{/* support for searching different resources and displaying selected properties */}
				{this.context.resultNum > 0 && this.context.resultType === "people"
					? this.context.results.map(result => Person(result))
					: ""}
				{this.context.results.length > 0 && this.context.resultType === "films"
					? this.context.results.map(result => Film(result))
					: ""}
				{this.context.results.length > 0 &&
				this.context.resultType === "starships"
					? this.context.results.map(result => Starship(result))
					: ""}
				{this.context.results.length > 0 &&
				this.context.resultType === "vehicles"
					? this.context.results.map(result => Vehicle(result))
					: ""}
				{this.context.results.length > 0 &&
				this.context.resultType === "species"
					? this.context.results.map(result => Species(result))
					: ""}
				{this.context.results.length > 0 &&
				this.context.resultType === "planets"
					? this.context.results.map(result => Planet(result))
					: ""}
			</section>
		);
	}
}
