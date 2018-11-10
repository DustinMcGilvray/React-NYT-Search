import React from 'react';
import { Link } from "react-router-dom";
import nyt_logo from "./nyt_logo.png";
import "./SavedNavbar.css";


const SavedNavbar = () => {
    return(
        <nav id="app-title" className="navbar transparent">
            <Link className="navbar-brand text-white" to="/">
                <img id="nyt-logo" src={nyt_logo} width="30" height="30" alt=""></img>
            New York Times Article Search
            </Link>
            <form className="form-inline">
           <Link className="saved-article-link text-white" to="/"> <button className="btn btn-primary">Search Articles</button></Link>
            </form>
        </nav>       
    )
}
export default SavedNavbar;