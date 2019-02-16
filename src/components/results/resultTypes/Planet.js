import React from "react";

export default function Planet(planet) {
	return (
		<li key={planet.url} className="planet" name={planet.name}>
			{`Name: ${planet.name}
      Day Length: ${planet.rotation_period} hours
      Year Length: ${planet.orbital_period} days
			Gravity: ${planet.gravity}`}
		</li>
	);
}
