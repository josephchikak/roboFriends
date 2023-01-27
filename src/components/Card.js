import React from 'react';

const Card = ({id, name, email}) =>
{
    return(
        <div className= "tc bg-light-purple dib pa2 ma3 w-25 grow bw2 br3 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;