/* eslint-disable no-lone-blocks */
import React from "react";

export default function Starship(starship) {
	return (
		<li key={starship.url} className="starship" name={starship.name}>
			{`Name: ${starship.name}`}
		</li>
	);
}

{
	/* <li key={starship.url} className="starship" name={starship.name}>
  {`Name: ${starship.name}
      Day Length: ${starship.rotation_period} hours
      Year Length: ${starship.orbital_period} days
			Gravity: ${starship.gravity}`}
</li> */
}
