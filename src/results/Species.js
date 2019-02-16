import React from "react";

export default function Species(species) {
	return (
		<li key={species.url} className="species" name={species.name}>
			{`Name: ${species.name}`}
		</li>
	);
}

{
	/* <li key={species.url} className="species" name={species.name}>
  {`Name: ${species.name}
      Day Length: ${species.rotation_period} hours
      Year Length: ${species.orbital_period} days
			Gravity: ${species.gravity}`}
</li> */
}
