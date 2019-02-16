import React from "react";

export default function Vehicle(vehicle) {
	return (
		<li key={vehicle.url} className="vehicle" name={vehicle.name}>
			{`Name: ${vehicle.name}`}
		</li>
	);
}

{
	/* <li key={vehicle.url} className="vehicle" name={vehicle.name}>
  {`Name: ${vehicle.name}
      Day Length: ${vehicle.rotation_period} hours
      Year Length: ${vehicle.orbital_period} days
			Gravity: ${vehicle.gravity}`}
</li> */
}
