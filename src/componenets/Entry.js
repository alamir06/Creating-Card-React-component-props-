import React from "react";

function Entry(props)
{
    return (
        <div>
         
            <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense biceps">{props.emogi}</span>
                <span className="emtitle">{props.name}</span>
            </dt>
            <dd>{props.meaning}</dd>
            </div>
            </div>
        
    );
}
export default Entry;