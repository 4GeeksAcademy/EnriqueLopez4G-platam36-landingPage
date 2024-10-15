import React from "react";
import { titlesReact, rollitos } from "./Card";

export default function JumbotronJS() {
	let elquesea = Math.floor(Math.random()*5);
	return (
		
		<div className="container m-5">
  			<div className="mt-4 p-5 bg-secondary text-white rounded">
    			<h2>{titlesReact[elquesea]}</h2> 
    			<p>{rollitos[elquesea]}</p> 
				<h5 style ={{textAlign:"right"}}>Enrique Lopez 4Geeks</h5>
  			</div>
			
		</div>
	)
}

