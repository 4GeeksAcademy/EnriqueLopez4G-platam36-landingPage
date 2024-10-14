import React from "react";
import { titlesReact, rollitos } from "./Card";

function JumbotronJS() {
	let elquesea = Math.floor(Math.random()*5);
	return (
		
		<div className="container mt-3">
  			<div className="mt-4 p-5 bg-primary text-white rounded">
    			<h2>{titlesReact[elquesea]}</h2> 
    			<p>{rollitos[elquesea]}</p> 
				<h5 style ={{textAlign:"right"}}>Enrique Lopez 4Geeks</h5>
  			</div>
			
		</div>
	)
}
export default JumbotronJS;
