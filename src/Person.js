import React from "react";

export default function Person(person) {
	return (
		<li key={person.url} className="person" name={person.name}>
			{`Name: ${person.name}
			DOB: ${person.birth_year}
			Height: ${person.height}cm
			Mass: ${person.mass !== "unknown" ? `${person.mass}kg` : "unknown"}`}
		</li>
	);
}
