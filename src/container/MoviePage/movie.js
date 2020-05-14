import React from 'react';
import '../MoviePage/movie.css';
import {Route, Link} from 'react-router-dom';
import DownloadMoviePage from '../DownloadMoviePage/DownloadMoviePage';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import Tooltip from '../Tooltip/tooltip';

const movies = (props) =>{
    /*delay={ [2500,100]}*/
   
    
   return(
       <div className='movieBlock'>  
              <img onMouseEnter={window.innerWidth>992?props.zoomIn:null} onMouseLeave={window.innerWidth>992?props.zoomOut:null}  src={props.Poster}/>
              {/* <img   src={props.Poster}/> */}
       </div>
   );
};

export default movies;