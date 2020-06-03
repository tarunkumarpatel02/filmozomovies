import React from 'react';
import '../Dropdown/Dropdown.css';
import {Route,Link,NavLink} from 'react-router-dom';

const Dropdown = (props)=>{
    var genreList=props.genre.map(elem=>(
        // <li key={elem}><a style={{color:"#449fcf"}}  onClick={props.clicked}>{elem}</a></li>
        <li key={elem}><Link to="/" onClick={props.clicked} >{elem}</Link></li>
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
            <span className=" dropdown-toggle"  style={{fontWeight:"700",fontSize:"16px",cursor:"default",marginRight:"16px"}}  data-toggle="dropdown">Imdb</span>
                <ul className="dropdown-menu">
                    {imdb}
                </ul>
             </li>
             <li >
                 <Link className="headerLinkMovies"  to={{
                    pathname:"/to movies page",
                    hash:props.Poster,
                    key:props.imdbID}}>
                     <span>Movies</span>
                 </Link>
             </li>
             <li >
                <Link  className="headerLink" to={{
                    pathname:"/to TV Shows page",
                    hash:props.Poster,
                    key:props.imdbID}} >
                     <span>TV Shows</span>
                 </Link>
             </li>
        </ul>
    // </div>
  );
}

export default Dropdown;