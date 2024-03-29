// JavaScript source code
import { useState } from 'react';
import Routing from '../LinkRouting';
import '../index.css';

/*
BOSS SEARCH BAR FOR BOSS PAGES
DO NOT CHANGE UNLESS NECESSARY
See Searchbar.js for comments
*/ 
const BossSearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    let name = ""
    function handleChange(e) {
        name += e.target.value
        //const inputValue = e.target.value;
        setSearchInput(name);
    }
    function handleSubmit(e) {
        e.preventDefault();
        Routing(searchInput.toLowerCase());
        setSearchInput("");
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <input className="searchBar"
                        type="text"
                        placeholder="Search another boss..."
                        onChange={handleChange}
                        value={searchInput}
                    />
                </div>
                <div className='container'>
                    <input className="submitButton"
                        type="submit"
                        value="Search!"
                    />
                </div>
                <style>
                    {` 
                    ::placeholder { 
                        color: white; 
                    }`
                    }
                </style>
            </form>
        </div>

    )
}
export default BossSearchBar;