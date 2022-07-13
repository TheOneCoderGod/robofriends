import React from 'react';
import Card from './Card.js';


const CardList =(props) =>{
    const{robots}=props;


    /*if(true){
        throw new Error('Shetafaken');
    }*/
    const cardArray = robots.map((user,i)=>{
        return(
            <Card 
                key={i}
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
            />
        );
     }
    )

    return(
        <div>
            {cardArray}
         </div>
  
    );
}
export default CardList;