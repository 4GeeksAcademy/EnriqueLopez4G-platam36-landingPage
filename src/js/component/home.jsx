import React from "react";
import Card from './Card';
import NavBarJS from "./NavBarJS";
import JumbotronJS from './JumbotronJS';


//create your first component
const Home = () => {
	return (
		<div>
			<NavBarJS/>
			<Card/>
			<JumbotronJS/>
			
		</div>	
	);
};

export default Home;
