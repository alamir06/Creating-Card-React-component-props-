import React from "react";
import Heading from "./Heading";
import Entry from "./Entry";
import emojiNotes from "./emojipedia";
import str from "./substring";

function emojiNote(emoji)
{
  return (
 
     <Entry 
      key={emoji.id}
      emogi={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
     />
    
  );
}

function App()
{
    return (
        <div>
        <Heading />
        <div className="dictionary">
        {emojiNotes.map(emojiNote)}
        </div>
        {str}
        </div>
    );
}

export default App;
