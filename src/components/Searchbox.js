import React from "react";

const SearchBox = ({searchfield, searchChange}) =>{
    return (
        <div className="pa2 shadow-5">
            <input className=" br3 pa2 shadow-2"
            type='search'
            placeholder="search roboFriends"
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;