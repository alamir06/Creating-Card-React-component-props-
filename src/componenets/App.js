import React from "react";
import Card from "./Card";
import names from "./conatcts";
import Avater from "./avater";


function createCard(contact)
{
  return <Card 
     name={contact.name}
     img={contact.img}
     tel={contact.tel}
     email={contact.email}
     
  />
}

function App() {
  return (
    <div>
    <h2>My contacts</h2>
    {names.map(createCard)}
    </div>
  );
}

export default App;
