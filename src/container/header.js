import React from 'react';
import '../container/header.css';
import Search from '../container/search';
import Desktop from '../hoc/desktop';
import Tablet from '../hoc/Tablet';
import Mobile from '../hoc/Mobile'; 
import LargeScreen from '../hoc/LargeScreen';

const header = (props)=>{
    return(
        <div>
            <LargeScreen>
                <header>
                    <Search genrelist={props.genre} 
                    imdb={props.imdb}
                    nameChangeHandler={props.nameChangeHandler}
                    searchHandler={props.searchHandler}
                    name={props.name}
                    loadHomepage={props.loadHomepage}
                    searchHandlerOnEnter={props.searchHandlerOnEnter}/>
                </header>
            </LargeScreen>
            <Desktop>
                <header>
                    <Search genrelist={props.genre} 
                    playTrailer={props.playTrailer}
                    imdb={props.imdb}
                    nameChangeHandler={props.nameChangeHandler}
                    searchHandler={props.searchHandler}
                    name={props.name}
                    loadHomepage={props.loadHomepage}
                    searchHandlerOnEnter={props.searchHandlerOnEnter}/>
                </header>
            </Desktop>
            <Tablet>
                <header className ="headerTablet">
                    <Search genrelist={props.genre} 
                    imdb={props.imdb}
                    nameChangeHandler={props.nameChangeHandler}
                    searchHandler={props.searchHandler}
                    name={props.name}
                    loadHomepage={props.loadHomepage}
                    searchHandlerOnEnter={props.searchHandlerOnEnter}/>
                </header>
            </Tablet>
            <Mobile>
                <header className ="headerMobile">
                    <Search genrelist={props.genre} 
                    imdb={props.imdb}
                    nameChangeHandler={props.nameChangeHandler}
                    searchHandler={props.searchHandler}
                    name={props.name}
                    loadHomepage={props.loadHomepage}
                    searchHandlerOnEnter={props.searchHandlerOnEnter}
                    toggleSideMenu={props.toggleSideMenu}/>
                </header>
            </Mobile>
        </div>
       
        
    );
}

export default header;