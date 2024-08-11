import { useState } from "react";
import search from '../assets/icons/search.svg';


function SearchBar({onSearch}){
const [input, setInput] = useState('');

const handleInputChange = (e) => {
    setInput(e.target.value);
};

const handleSearch =() => {
    onSearch(input);
}

    return (
        <div className="search-bar">
        <div className="input-container">
            <img src={search} alt="search_icon" className="search-icon" />
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Search location..."
            />
            </div>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};


export default SearchBar;