import React from 'react';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const imgs = [
	'https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png',
	'https://themesberg.s3.us-east-2.amazonaws.com/public/posts/react-dashboard-tutorial/thumbnail.png',
	'https://i.ytimg.com/vi/Bx7taFW0XbY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDrQ2LwUIqNBzP2SrrYqdDfsOz_rA',
	'https://reactiveprogramming.io/_next/image?url=%2Ffigures%2Freact%2Fjerarquia-de-componentes.png&w=1920&q=75',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgwdLiPEZ0kTCfX77I1bwlqB2nkSTSTKDdQ&s'

]

const titlesReact = [
	'The library for web and native user interfaces',
	'Create user interfaces from components',
	'Write components with code and markup',
	'Add interactivity wherever you need it',
	'Go full-stack with a framework'
]

const rollitos = [
	'React is a JavaScript library created by Facebook. React is a User Interface (UI) library.',
	'React lets you build user interfaces out of individual pieces called components.',
	'React components are JavaScript functions.',
	'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React.',
	'React components receive data and return what should appear on the screen.'
]

const botons = [
	'Learn React JS',
	'Create User Inferfaces',
	'Write Componentes',
	'Add Interactivity',
	'Go Full stack'
]
const Card=()=> {
	let cualPongo = Math.floor(Math.random()*5);
    return (
	 	<div className="card" style={{width: "18rem", margin: "auto"}}>
			<img className="card-img-top" src={imgs[cualPongo]} style = {{ width: "100%", height: "auto" }} alt="Card image cap"/>
			<div className="card-body" style={{ textAlign: "center" }}>
				<h5 className="card-title"> {titlesReact[cualPongo]}</h5>
            <p className="card-text">{rollitos[cualPongo]}</p>
            <a href="#" className="btn btn-primary">{botons[cualPongo]}</a>
         </div>
      </div>
    )
}

export default Card;
export {titlesReact,rollitos};