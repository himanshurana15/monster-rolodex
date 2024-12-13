// import { Component  } from "react";
import './search-box.style.css';


const Searchbox = ({className,placeholder,onChange}) => (
        <input 
        className={`search-box ${className}`}
        type ='search'
        placeholder={placeholder}
        onChange={onChange}
        />
    );




export default Searchbox; 
