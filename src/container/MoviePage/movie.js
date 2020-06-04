import React from 'react';
import '../MoviePage/movie.css';
import {Route, Link} from 'react-router-dom';
import DownloadMoviePage from '../DownloadMoviePage/DownloadMoviePage';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import Tooltip from '../Tooltip/tooltip';
import Trailer from '../../assets/trailers/infinity.mp4';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import IconButton from '@material-ui/core/IconButton';
import LargeScreen from '../../hoc/LargeScreen';
import Desktop from '../../hoc/desktop';
const movies = (props) =>{
    /*delay={ [2500,100]}*/
   
    
   return(
       <div className='movieBlock'  style={{position: "relative"}} onMouseEnter={window.innerWidth>992?props.zoomIn:null} onMouseLeave={window.innerWidth>992?props.zoomOut:null} >  
              <img className=".img"  src={props.Poster}/>
              {/* <IconButton className="playCircle"  type="submit" style={{fontSize:45, position: "absolute",top: "40%",left: "50px",display:"none"}}  aria-label="search" onClick={props.playTrailer} >
                 <PlayCircleFilledWhiteIcon style={{fontSize:35}}   title={"Play Trailer"}></PlayCircleFilledWhiteIcon> 
              </IconButton> */}
              <Tippy content="Watch Trailer">
                <i className="fa fa-play-circle playCircle" style={{ textShadow:"6px 4px 16px white", color:"red",fontSize:"2.56vw", position: "absolute",top: "40%",left: "40%",display:"none"}} onClick={props.playTrailer}  aria-hidden="true"></i>
                {/* <i className="fa fa-youtube-play playCircle" style={{  color:"red",fontSize:35, position: "absolute",top: "40%",left: "70px",display:"none"}} onClick={props.playTrailer}  aria-hidden="true"></i> */}
              </Tippy>
             
              {/* <PlayCircleFilledWhiteIcon className="playCircle" style={{fontSize: 25,position: "absolute",top: "70%",left: "78px"}}></PlayCircleFilledWhiteIcon> */}
              
              <video className='trailerVideo' style={{position: "absolute"}}   poster={props.Poster} loop   autoPlay muted >
                <source src={Trailer} type='video/mp4'></source>
               
                {/* <Link className="watchMovieOnVideo" style={{fontSize: 15,position: "absolute",top: "0%",left: "0%",color:"white"}} to={{
                  pathname:props.Title,
                  hash:props.Poster,
                  key:props.imdbID}}>
                  Watch Movie
                </Link> */}
              </video> 

              
              <Desktop>
                <Link className="watchMovie" style={{textDecoration:"none", display:"none",fontSize: 15,position: "absolute",top: "90%",left:"3vw",color:"white",resize:"none"}} to={{
                  pathname:props.Title,
                  key:props.imdbID}}>
                    Watch Movie
                </Link>
              </Desktop>

              <LargeScreen>
                  <Link className="watchMovie" style={{display:"none",fontSize: 15,position: "absolute",top: "90%",left:"3.3vw",color:"white",zIndex:"10",fontStretch:"condensed"}} to={{
                    pathname:props.Title,
                    key:props.imdbID}}>
                      Watch Movie
                      {/* <Tippy content="Watch Trailer">
                        <i className="fa fa-play-circle " style={{ textShadow:"6px 4px 16px white", color:"red",fontSize:"2.56vw"}}  aria-hidden="true"></i>
                        {/* <i className="fa fa-youtube-play playCircle" style={{  color:"red",fontSize:35, position: "absolute",top: "40%",left: "70px",display:"none"}} onClick={props.playTrailer}  aria-hidden="true"></i> */}
                      {/* </Tippy> */} 
                  </Link>
              </LargeScreen>

              {/* <iframe src={"https://www.youtube.com/embed/8ugaeA-nMTc?autoplay=1"} poster={props.Poster} > </iframe> */}
              {/* <iframe frameborder="0" width="640" height="360" src="https://www.dailymotion.com/embed/video/x5i8fa4" allowfullscreen allow="autoplay"></iframe> */}
       </div>
   );
};

export default movies;