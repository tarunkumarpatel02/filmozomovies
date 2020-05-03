import React from 'react';
import '../container/header.css';
import Search from '../container/search';

const header = (props)=>{
    return(
        <header className ="header">
            <Search genrelist={props.genre} 
             imdb={props.imdb}
             nameChangeHandler={props.nameChangeHandler}
             searchHandler={props.searchHandler}
             name={props.name}/>
        </header>
    );
}

export default header;