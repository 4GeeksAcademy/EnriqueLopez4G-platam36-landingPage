import React from 'react';
import { logoJS01,logoJS02,logoJS03,logoJS04,logoJS05 } from './logosJS';

const NavBarJS =()=> {
    return (
	 	<nav class="navbar navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<img src={logoJS01} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
          Learn ReacJS
        </a>
        <a class="navbar-brand" href="#">
					<img src={logoJS02} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
          Create UIS
        </a>
        <a class="navbar-brand" href="#">
					<img src={logoJS03} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
          Write Componentes
        </a>
        <a class="navbar-brand" href="#">
					<img src={logoJS04} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
          Add Interactivity
        </a>
        <a class="navbar-brand" href="#">
					<img src={logoJS05} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
          Go Full Stack
        </a>
        </div>
      </nav>
    )
}

export default NavBarJS;