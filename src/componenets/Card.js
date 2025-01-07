import React from "react";
import Avater from "./avater";
import Detail from "./detail";


function Card(props){
    return (
        <div className='container'>
         <div className='header'>
         <p>{props.id}</p>
         <h1>{props.name}</h1>
      <Avater img={props.img}/>
      </div>
       <div className='bottom'>
        <Detail tel={props.tel} email={props.email} />
       </div>
    </div>
    );
}

export default Card;