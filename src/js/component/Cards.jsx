import React from "react";
import Card from "./Card";

const Cards =({ isCollapsed })=> {
    console.log(isCollapsed)
    return (
       
         <div className={`container-fluid d-flex ${isCollapsed ? 'flex-column' : 'flex-row'} align-items-center justify-content-center`}>
             {[0,1,2,3].map((item) => (
                 <Card key={item} itemCard={item} className="my-5 me-3" />
                ))}
        </div>
    )
}

export default Cards;