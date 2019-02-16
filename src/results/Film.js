import React from "react";

export default function Film(film) {
	return (
		<li key={film.url} className="film" name={film.name}>
			{`Name: ${film.name}`}
		</li>
	);
}

{
	/* <li key={film.url} className="film" name={film.name}>
  {`Name: ${film.name}
      Day Length: ${film.rotation_period} hours
      Year Length: ${film.orbital_period} days
			Gravity: ${film.gravity}`}
</li> */
}
