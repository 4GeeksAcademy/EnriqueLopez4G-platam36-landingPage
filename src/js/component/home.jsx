import React, {useState,useEffect} from "react";
import NavBarJS from "./NavBarJS";
import JumbotronJS from './JumbotronJS';
import Cards from "./Cards";


//create your first component
const Home = () => {
	const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 992); // Inicializa en true si el ancho es menor a 992px

	const toggleNavbar = () => {
		setIsCollapsed(isCollapsed);
	};
	useEffect(() => {
        const handleResize = () => {
            setIsCollapsed(window.innerWidth < 992); // Ajusta el estado según el tamaño de la ventana
			//aqui yo hice pruebas con el inspector del cxhrome y vi que cuando bajaba de 992 salia la hambvurguesa
        };

        window.addEventListener('resize', handleResize);
		        // Limpia el evento al desmontar
				return () => {
					window.removeEventListener('resize', handleResize);
				};
			}, []);
	return (
		<div>
			<NavBarJS isCollapsed={isCollapsed} toggleNavbar={toggleNavbar}/>
			<JumbotronJS/>
			<Cards isCollapsed= {isCollapsed}/>
		</div>	
	);
};

export default Home;
