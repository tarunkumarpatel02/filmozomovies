import React from 'react';
import '../Dropdown/Dropdown.css';

const Dropdown = (props)=>{
    var genreList=props.genre.map(elem=>(
        <li key={elem}><a style={{color:"#449fcf"}}  onClick={props.clicked}>{elem}</a></li>
        ));

        var imdb=props.imdb.map(elem=>(
        <li key={elem}><a style={{color:"#449fcf"}}>{elem}</a></li>
        ));
  return(
    // <div className="searchDropdown">
       <ul className=" searchDropdown nav nav-pills">
            <li>
            <span className=" dropdown-toggle" style={{fontWeight:"700",fontSize:"16px", overflow:"hidden",marginRight:"16px",cursor:"default"}} data-toggle="dropdown">Genre</span>
                <ul className="dropdown-menu">
                    {genreList}
                </ul>
             </li>
             <li >
            <span className=" dropdown-toggle"  style={{fontWeight:"700",fontSize:"16px",cursor:"default"}}  data-toggle="dropdown">Imdb</span>
                <ul className="dropdown-menu">
                    {imdb}
                </ul>
             </li>
        </ul>
    // </div>
  );
}

export default Dropdown;