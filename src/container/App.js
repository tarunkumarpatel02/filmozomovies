import React, {Component} from 'react';
import LandingPage from '../container/LandingPage/LandingPage';
import './App.css';
import DownloadMoviePage from '../container/DownloadMoviePage/DownloadMoviePage';
import Header from '../container/header';
import Search from '../container/search';
import Mobile from '../hoc/Mobile';
import Desktop from '../hoc/desktop';
import LargeScreen from '../hoc/LargeScreen';
import OnlyMovies from '../container/onlyMovies';
import TVshows from '../container/tvShows';

import { BrowserRouter } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Parallax } from 'react-scroll-parallax';



class App extends Component {

  state={
    movieBlock:[],
    movieBlock2:[],
    genre:["Action","Adventure","Animation","Biography","Comedy",
    "Crime","Documentation","Drama","Family","Fantasy","Film-Noir",
    "Game-Show", "History","Horror","Music","Musical","Mystery",
    "News","Reality","Romance","Sci-Fi","Sport","Talk-Show","Thriller"," War", "Western"],
    Year:'',
    Imdb:[1,2,3,4,5,6,7,8,9,10],
    name:'',
    activeItemIndex: 0,
    windowWidth :window.innerWidth,
    searchTitle:'',
    trailer:'../../assets/trailers/ironMan.mp4',
    iFrameSrc:'',
    playTrailer:false
  }



  zoomIn=(e)=>{
    // e.target.style.transform= "scale(1.4)";
    // e.target.closest(".movieBlock").style.padding="34px 50px";
    // e.target.closest(".rec.rec-slider").style.height="237px";
    // e.target.closest(".rec.rec-carousel").style.height="236.90625px"; //uncomment this only
    // e.target.closest(".rec.rec-swipable-carouselHvr").style.paddingTop="34px";//uncomment this only
    if(e.target){
      e.target=e.target;
    }else{
      e.target=e;
    }
    e.target.closest('.movie').style.zIndex="4";
    e.target.closest(".rec.rec-swipable-carouselHvr").style.transformOrigin= "";
    var sliderContents = e.target.closest(".rec.rec-slider").querySelectorAll(".rec.rec-swipable-carouselHvr");
    if(parseInt(e.target.closest(".rec.rec-swipable-carouselHvr").getBoundingClientRect().left)<330||parseInt(e.target.closest(".rec.rec-swipable-carouselHvr").getBoundingClientRect().left)===-1){
      console.log(e.target.closest(".rec.rec-swipable-carouselHvr").getBoundingClientRect().left);
      e.target.closest(".rec.rec-swipable-carouselHvr").style.transformOrigin= "left";//uncomment this onlytransform-origin: left;
      if(e.target && e.target.closest(".rec.rec-swipable-carouselHvr").style.transformOrigin=== "left center"){
        for(var i=[...sliderContents].indexOf(e.target.closest(".rec.rec-swipable-carouselHvr"))+1;i<[...sliderContents].length;i++){
          
          if(window.innerWidth>1600){
            [...sliderContents][i].style.transform= "translateX(50%)";
            }else{
              [...sliderContents][i].style.transform= "translateX(45%)";
            }
        }
        // e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "scale(1.5)";//uncomment this onlytransform-origin: left;
        
        if(window.innerWidth>1600){
          e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "translateX(-5px) scale(1.5,1.5)";
          }else{
            e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "translateX(-5px) scale(1.5,1.5)";
          }
        // e.target.closest(".movieBlock").style.zIndex="4";
        // e.target.closest(".movieBlock").style.transform= "scale3d(2.81,1.07,1.2,1)";
        // e.target.closest(".rec.rec-item-wrapper").style.backgroundColor= "#141414";//uncomment this onlytransform-origin: left;
        e.target.closest(".movieBlock").querySelector('.playCircle').style.display="block";
        e.target.closest(".movieBlock").querySelector('.playCircle').style.zIndex="5";
        e.target.style.opacity="0.9";
        e.target.closest(".movieBlock").querySelector('.watchMovie').style.display="block";
        // e.target.closest(".movieBlock").querySelector('.watchMovie').style.display="block";
        if(this.state.playTrailer){
          for(var i=[...sliderContents].indexOf(e.target.closest(".rec.rec-swipable-carouselHvr"))+1;i<[...sliderContents].length;i++){
            if(window.innerWidth>1600){
              [...sliderContents][i].style.transform= "translateX(300%)";
              }else{
                [...sliderContents][i].style.transform= "translateX(275%)";
              }
            
          }
          if(window.innerWidth>1600){
            e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "translateX(5px) scale3d(3.94,1.5,1)";
            }else{
              e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "translateX(-20px) scale3d(3.94,1.5,1)";
            }
         
          e.target.closest(".movieBlock").querySelector('img').style.display="none";
          e.target.closest(".movieBlock").querySelector('video').style.display="block";
          e.target.closest(".movieBlock").querySelector('.playCircle').style.display="none";
          this.state.playTrailer=!this.state.playTrailer;
        }
        // e.target.closest(".movieBlock").querySelector('video').style.display="block";
        // e.target.closest(".rec.rec-swipable-carouselHvr").innerHTML='<iframe width="218" height="339" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>';
        // e.target.closest(".movieBlock").innerHTML='<iframe width="218" height="339" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>';
        // this.setState({iFrameSrc:e.target.src});
        // e.target.src="https://www.youtube.com/embed/8ugaeA-nMTc?autoplay=1";
      }
    }else if((window.innerWidth<1600&&(parseInt(e.target.closest(".rec.rec-swipable-carouselHvr").getBoundingClientRect().right)>1000||parseInt(e.target.closest(".rec.rec-swipable-carouselHvr").getBoundingClientRect().right)===1057))||(window.innerWidth>1600&&(parseInt(e.target.closest(".rec.rec-swipable-carouselHvr").getBoundingClientRect().right)>1600))){
      console.log(e.target.closest(".rec.rec-swipable-carouselHvr").getBoundingClientRect().right);
      e.target.closest(".rec.rec-swipable-carouselHvr").style.transformOrigin= "right";//uncomment this onlytransform-origin: left;
      if(e.target.closest(".rec.rec-swipable-carouselHvr").style.transformOrigin=== "right center"){
        for(var i=[...sliderContents].indexOf(e.target.closest(".rec.rec-swipable-carouselHvr"))-1;i>=0;i--){
          [...sliderContents][i].style.transform= "translateX(-50%)";
        }
        // e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "scale3d(1.5,1.5,1.5)";//uncomment this onlytransform-origin: left;
        e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "transitionDelay(2s)";//uncomment this onlytransform-origin: left;
        // e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "scale3d(1,1,1)";//uncomment this onlytransform-origin: left;
        // e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "scale(1)";//uncomment this onlytransform-origin: left; 
       
        if(window.innerWidth>1600){
          e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "translateX(5px) scale(1.5)";
          }else{
            e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= " translateX(5px) scale(1.5)";
          }
        e.target.closest(".movieBlock").querySelector('.playCircle').style.display="block";
        e.target.closest(".movieBlock").querySelector('.playCircle').style.zIndex="5";
        e.target.closest(".movieBlock").querySelector('.watchMovie').style.display="block";
        // e.target.style.filter="blur(1px)";
        // e.target.closest(".movieBlock").querySelector('img').style.display="none";
        // e.target.closest(".movieBlock").querySelector('video').style.display="block";
        if(this.state.playTrailer){
          for(var i=[...sliderContents].indexOf(e.target.closest(".rec.rec-swipable-carouselHvr"))-1;i>=0;i--){
            if(window.innerWidth>1600){
              [...sliderContents][i].style.transform= "translateX( -305%)";
              }else{
                [...sliderContents][i].style.transform= "translateX(-275%)";
              }
          }
          e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "translateX(15px) scale3d(3.94,1.5,1)";
          e.target.closest(".movieBlock").querySelector('img').style.display="none";
          // e.target.closest(".movieBlock").querySelector('iframe').style.display="block";
          e.target.closest(".movieBlock").querySelector('video').style.display="block";
          e.target.closest(".movieBlock").querySelector('.playCircle').style.display="none";
          this.state.playTrailer=!this.state.playTrailer;
        }
        // e.target.closest(".rec.rec-swipable-carouselHvr").innerHTML='<iframe width="218" height="339" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>';
        // e.target.closest(".movieBlock").innerHTML='<iframe width="218" height="339" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>';
      }
    }else{
      console.log("e.target.closest('.rec.rec-swipable-carouselHvr').getBoundingClientRect().right"+e.target.closest(".rec.rec-swipable-carouselHvr").getBoundingClientRect().right);
     if(e.target){
     [...sliderContents].map(elem=>{
        elem.style.transform= "translateX(-25%)";
      });
      for(var i=[...sliderContents].indexOf(e.target.closest(".rec.rec-swipable-carouselHvr"))+1;i<[...sliderContents].length;i++){
        [...sliderContents][i].style.transform= "translateX(25%)";
      }
    } 
      // e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "scale3d(2,2,1)";//uncomment this only
      e.target.closest(".rec.rec-swipable-carouselHvr").style.alignItems="center";
      // e.target.closest(".movieBlock").style.transform= "scale3d(2.5,2,1)";
      e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "scale(1.5)";
      // e.target.closest(".movieBlock").style.opacity="0.2";
      e.target.closest(".movieBlock").querySelector('.playCircle').style.display="block";
      e.target.closest(".movieBlock").querySelector('.watchMovie').style.display="block";
      e.target.closest(".movieBlock").querySelector('.playCircle').style.zIndex="5";
      e.target.closest(".movieBlock").querySelector('.watchMovie').style.zIndex="5";
     
      // e.target.closest(".movieBlock").querySelector('img').style.display="none";
      // e.target.closest(".movieBlock").querySelector('video').style.display="block";
      // e.target.closest(".movieBlock").querySelector('iframe').style.display="block";
      if(this.state.playTrailer){
        e.target.closest(".movieBlock").style.opacity="1";
        for(var i=[...sliderContents].indexOf(e.target.closest(".rec.rec-swipable-carouselHvr"))-1;i>=0;i--){
          
          if(window.innerWidth>1600){
            [...sliderContents][i].style.transform= "translateX(-150%)";
            }else{
              [...sliderContents][i].style.transform= "translateX(-140%)";
            }
        }
        for(var i=[...sliderContents].indexOf(e.target.closest(".rec.rec-swipable-carouselHvr"))+1;i<[...sliderContents].length;i++){
          if(window.innerWidth>1600){
            [...sliderContents][i].style.transform= "translateX(150%)";
            }else{
              [...sliderContents][i].style.transform= "translateX(140%)";
            }
        }
        e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "scale3d(3.94,1.5,1)";
        e.target.closest(".movieBlock").querySelector('img').style.display="none";
        e.target.closest(".movieBlock").querySelector('video').style.display="block";
        e.target.closest(".movieBlock").querySelector('.playCircle').style.display="none";
        // e.target.closest(".movieBlock").querySelector('.watchMovie').style.display="none";
        // e.target.closest(".movieBlock").querySelector('.watchMovie').style.zIndex="6";
          this.state.playTrailer=!this.state.playTrailer;
      }
      console.log(e.target.closest(".movieBlock").querySelector('video').getBoundingClientRect().left);
      // e.target.closest(".movieBlock").innerHTML='<iframe width="218" height="339" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>';
      // e.target.closest(".rec.rec-swipable-carouselHvr").innerHTML='<iframe width="218" height="339" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>';
    }
   
    // var swipable = e.target.closest(".rec.rec-carousel").querySelectorAll(".rec.rec-swipable-carouselHvr");
    // [...swipable].map(elem=>{
    //   elem.style.transform= "translateX(20%)";
    // });
    // e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "translate3d(35%,0,0)"//uncomment this only
     
    //  e.target.closest(".rec.rec-swipable-carouselHvr").style.transitionDelay=" 0.5s";
    //  e.target.closest(".rec.rec-swipable-carouselHvr").style.transition=" all 300ms linear;";
    //  e.target.closest(".rec.rec-slider").style.transitionDelay=" 0.5s";
    // e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "translateX(-20%)";
    // e.target.style.transform= "scale(1.4)"
    // e.target.closest('.rec.rec-item-wrapper').style.width="350px";
    // e.target.closest(".rec.rec-slider").style.transform= "translateX(-20%)";
}
playTrailerHandler=(e)=>{
  this.state.playTrailer=!this.state.playTrailer;
  this.zoomIn(e.target.closest(".movieBlock").querySelector('img'));
}
zoomOut=(e)=>{
  // e.target.style.transform= "scale(1)";
  // e.target.closest(".movieBlock").style.padding="0px 0px";
  e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "translateX(0%)";
  // e.target.closest(".movieBlock").innerHTML='<img onMouseEnter={window.innerWidth>992?props.zoomIn:null} onMouseLeave={window.innerWidth>992?props.zoomOut:null}  src={props.Poster}/> ';
  var sliderContents = e.target.closest(".rec.rec-slider").querySelectorAll(".rec.rec-swipable-carouselHvr");
  [...sliderContents].map(elem=>{
    elem.style.transform= "translateX(0%)";
  });
  e.target.closest(".rec.rec-item-wrapper").style.backgroundColor= "";
  e.target.closest(".movieBlock").querySelector('video').style.display="none";
  if(e.target.closest(".movieBlock").querySelector('img').style.display==="none"){
    e.target.closest(".movieBlock").querySelector('img').style.display="block";
  }
  e.target.closest(".movieBlock").querySelector('.playCircle').style.display="none";
  e.target.closest('.movie').style.zIndex="1";
  e.target.closest(".movieBlock").style.opacity="1";
  e.target.closest(".movieBlock").querySelector('img').style.filter="blur(0px)";
  e.target.closest(".movieBlock").querySelector('.watchMovie').style.display="none";
  // e.target.closest(".movieBlock").querySelector('.watchMovie').style.display="none";
  // e.target.closest(".movieBlock").querySelector('.watchMovie').style.display="none";
  // e.target.src=this.state.iFrameSrc;
  // e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "scale(1)";//uncomment this only
  // e.target.closest(".rec.rec-swipable-carouselHvr").style.transitionDelay=" 0.2s";
  // e.target.closest(".rec.rec-swipable-carouselHvr").style.transition=" all 300ms linear;";
  // e.target.closest(".rec.rec-slider").style.transitionDelay=" 0.2s";
  // e.target.closest(".rec.rec-swipable-carouselHvr").style.paddingTop="0px";//uncomment this only
  // e.target.closest(".rec.rec-swipable-carouselHvr").style.padding="0px 0px";
  // e.target.closest(".rec.rec-swipable-carouselHvr").style.width="252.45px";
  // e.target.closest(".rec.rec-slider").style.padding="0px 0px";
  // e.target.closest(".rec.rec-item-wrapper").style.padding="0px 0px";
  // e.target.closest(".rec.rec-carousel-wrapper").style.padding="0px 0px";
  // e.target.closest(".rec.rec-slider-container").style.padding="0px 0px";
  // e.target.closest(".movieBlock").style.padding="0px 0px";
  // e.target.closest(".movie").style.padding="0px 0px";
  // e.target.closest(".rec.rec-carousel").style.padding="0px 0px";
  // e.target.closest(".rec.rec-carousel").style.height="168.90625px";//uncomment this only
  // e.target.closest('.rec.rec-item-wrapper').style.width="252.45px";
}
 
   // http://www.omdbapi.com/?i=tt3896198&apikey=e0a527f0
 // https://www.omdbapi.com/?s=all&apikey=e0a527f0
 //api/v1/movies

 componentDidMount (){
    let fetchedOrders = [];
    console.log(this.state.genre);
    axios.get("https://www.omdbapi.com/?s=avengers&apikey=e0a527f0&page=1-100").then(response=>{
      console.log(response)
      for(let key in response.data.Search){
        fetchedOrders.push(response.data.Search[key]);
      }
      fetchedOrders.shift();
        this.setState({movieBlock:fetchedOrders})
      fetchedOrders=[];
    }
    )
    axios.get("https://www.omdbapi.com/?s=action&apikey=e0a527f0").then(response=>{
      console.log(response)
      for(let key in response.data.Search){
        fetchedOrders.push(response.data.Search[key]);
      }
      fetchedOrders.shift();
        this.setState({movieBlock2:fetchedOrders})
      fetchedOrders=[];
    }
    )
  }

  
 

  nameChangeHandler=(event)=>{ // funcion executes everytime on change in the value of the search bar and updates the state variable
    this.setState({name:event.target.value});  
  }
  
  searchHandler=(event)=>{  //function for searching user entered values.
    var searchTerm = '';
    if(event.target.text&&event.target.text !==''){
        searchTerm = event.target.text;
        this.setState({searchTitle:searchTerm});
        this.state.name="";
    }else{
      searchTerm = this.state.name;
      this.setState({searchTitle:searchTerm});
      this.state.name="";
    }
    let fetchedOrders = [];
    axios.get("https://www.omdbapi.com/?s="+searchTerm+"&apikey=e0a527f0").then(response=>{
      console.log(response)
      for(let key in response.data.Search){
        fetchedOrders.push(response.data.Search[key]);
      }
  
        this.setState({movieBlock:fetchedOrders})
    }
    )
    if(document.querySelector("#mySidenav")&&document.querySelector("#mySidenav").style.width==="250px"){
      this.toggleSideMenuHandler();
    }
    // this.toggleSideMenuHandler();
  }

  loadHomepageHandler=()=>{ //function runs on clicking the logo shown on the header.Navigates the user back to the homepage.*/
      this.props.history.replace("/");
  }

  searchHandlerOnEnterHandler=(event)=>{ //for searching on pressing enter key
    if(event.key==="Enter"){
      this.searchHandler(event);
    }
  }

  toggleSideMenuHandler=()=>{
    // var sideMenu = e.target.closest("#mySidenav")
    var mobileArea = document.querySelector(".mainContainerMobile");
    var mobileAreaFooter = document.querySelector(".Mobilefooter");

    

    if(document.querySelector("#mySidenav").style.width==="250px"){
    	document.querySelector("#mySidenav").style.width = "0px";
    }else{
    	document.querySelector("#mySidenav").style.width = "250px";
    }
    if(document.querySelector("#mySidenav").style.width==="250px"){
      mobileArea.addEventListener("click", function(e){
        document.querySelector("#mySidenav").style.width = "0px";
      })

      mobileAreaFooter.addEventListener("click", function(e){
        document.querySelector("#mySidenav").style.width = "0px";
      })
    }
   
  }


  render(){
     return(
      // <div className="container-fluid mainApp">
      //   {/* <BrowserRouter> */}
      //   <div className="row form-group">
      //     <div className="col-sm-12 col-md-12 header">
      //       <Header nameChangeHandler={this.nameChangeHandler}
      //         genre ={this.state.genre}
      //         searchHandler={this.searchHandler}
      //         name={this.state.name}
      //         source={'../assets/images/logo.png'}
      //         imdb={this.state.Imdb}
      //         loadHomepage={this.loadHomepageHandler}
      //         searchHandlerOnEnter={this.searchHandlerOnEnterHandler}
      //         toggleSideMenu={this.toggleSideMenuHandler}/>
      //     </div>
      //   </div>
      //         <Switch>
      //             {/* <Route path="/" exact render={()=><LandingPage zoomOut={this.zoomOut} zoomIn={this.zoomIn} movieBlock={this.state.movieBlock} movieBlock2={this.state.movieBlock2}/>}/>
      //             <Route path='/:title' component={DownloadMoviePage}/> */}
      //             <Route path={ '/'} exact render={()=><LandingPage zoomOut={this.zoomOut} zoomIn={this.zoomIn} movieBlock={this.state.movieBlock} movieBlock2={this.state.movieBlock2}/>}/>
      //             <Route path={'/:title'} component={DownloadMoviePage}/> 
      //             <Route  render={()=><h1>Not Found</h1>}/>
      //             {/* <Route render={()=><h1>Not Found</h1>} */}
      //         </Switch> 

      //         <Desktop>
      //           <div className="row footer">
      //             <div className="col-sm-12 col-md-12">
      //                 <div className="brand-logo"></div>
      //                 <ul>
      //                   <li><a>Terms and Privacy Notice</a></li>
      //                   <li><a>Send us feedback</a></li>
      //                   <li><a>Help</a></li>
      //                   <li>© 2020, Filmozo.com</li>
      //                 </ul>
      //             </div>
      //           </div>
      //         </Desktop>
      //         <Mobile>
      //           <div className="row Mobilefooter">
      //             <div className="col-sm-12 col-md-12">
      //                 <div className="brand-logo"></div>
      //                 <ul>
      //                   <li><a>Terms and Privacy Notice</a></li>
      //                   <li><a>Send us feedback</a></li>
      //                   <li><a>Help</a></li>
      //                   <li>© 2020, Filmozo.com</li>
      //                 </ul>
      //             </div>
      //           </div>
      //         </Mobile>
          
      //   {/* </BrowserRouter> */}
      // </div>
      <div>
        <LargeScreen>
          <div className="container-fluid mainApp">
              <div className="row form-group">
                <div className="col-sm-12 col-md-12 header">
                  <Header nameChangeHandler={this.nameChangeHandler}
                    genre ={this.state.genre}
                    searchHandler={this.searchHandler}
                    name={this.state.name}
                    source={'../assets/images/logo.png'}
                    imdb={this.state.Imdb}
                    loadHomepage={this.loadHomepageHandler}
                    searchHandlerOnEnter={this.searchHandlerOnEnterHandler}
                    toggleSideMenu={this.toggleSideMenuHandler}/>
                </div>
              </div>
              <Switch>
                <Route path={ '/'} exact render={()=><LandingPage playTrailer={this.playTrailerHandler}  searchTitle={this.state.searchTitle} zoomOut={this.zoomOut} zoomIn={this.zoomIn}  movieBlock={this.state.movieBlock} movieBlock2={this.state.movieBlock2}/>}/>
                <Route path='/to movies page' component={OnlyMovies}/>
                <Route path='/to TV Shows page' component={TVshows}/>
                <Route path='/:title' exact component={DownloadMoviePage}/> 
                <Route  render={()=><h1>Not Found</h1>}/>
              </Switch> 
                <div className="row footer">
                  <div className="col-sm-12 col-md-12">
                      <div className="brand-logo"></div>
                      <ul>
                        <li><a>Terms and Privacy Notice</a></li>
                        <li><a>Send us feedback</a></li>
                        <li><a>Help</a></li>
                        <li>© 2020, Filmozo.com</li>
                      </ul>
                  </div>
                </div>
            </div>
        </LargeScreen>
        <Desktop>
          <div className="container-fluid mainApp">
            <div className="row form-group">
              <div className="col-sm-12 col-md-12 header">
                <Header nameChangeHandler={this.nameChangeHandler}
                  genre ={this.state.genre}
                  searchHandler={this.searchHandler}
                  name={this.state.name}
                  source={'../assets/images/logo.png'}
                  imdb={this.state.Imdb}
                  loadHomepage={this.loadHomepageHandler}
                  searchHandlerOnEnter={this.searchHandlerOnEnterHandler}
                  toggleSideMenu={this.toggleSideMenuHandler}/>
              </div>
             </div>
            <Switch>
              <Route path={ '/'} exact render={()=><LandingPage playTrailer={this.playTrailerHandler} searchTitle={this.state.searchTitle} zoomOut={this.zoomOut} zoomIn={this.zoomIn} movieBlock={this.state.movieBlock} movieBlock2={this.state.movieBlock2}/>}/>
              <Route path='/to movies page' component={OnlyMovies}/>
              <Route path='/to TV Shows page' component={TVshows}/>
              <Route path={'/:title'} component={DownloadMoviePage}/> 
              <Route  render={()=><h1>Not Found</h1>}/>
            </Switch> 
              <div className="row footer">
                <div className="col-sm-12 col-md-12">
                    <div className="brand-logo"></div>
                    <ul>
                      <li><a>Terms and Privacy Notice</a></li>
                      <li><a>Send us feedback</a></li>
                      <li><a>Help</a></li>
                      <li>© 2020, Filmozo.com</li>
                    </ul>
                </div>
              </div>
          </div>
          </Desktop>

        <Mobile>
         <div className="container-fluid MobilemainApp">
            <div className="row form-group">
              <div className="col-sm-12 col-md-12 headerMobile">
                <Header nameChangeHandler={this.nameChangeHandler}
                  genre ={this.state.genre}
                  searchHandler={this.searchHandler}
                  name={this.state.name}
                  source={'../assets/images/logo.png'}
                  imdb={this.state.Imdb}
                  loadHomepage={this.loadHomepageHandler}
                  searchHandlerOnEnter={this.searchHandlerOnEnterHandler}
                  toggleSideMenu={this.toggleSideMenuHandler}/>
              </div>
            </div>
            <Switch>
              <Route path={ '/'} exact render={()=><LandingPage searchTitle={this.state.searchTitle} zoomOut={this.zoomOut} zoomIn={this.zoomIn} movieBlock={this.state.movieBlock} movieBlock2={this.state.movieBlock2}/>}/>
              <Route path={'/:title'} component={DownloadMoviePage}/> 
              <Route  render={()=><h1>Not Found</h1>}/>
            </Switch> 
            <div className="row Mobilefooter">
              <div className="col-sm-12 col-md-12">
                  <div className="brand-logo"></div>
                  <ul>
                    <li><a>Terms and Privacy Notice</a></li>
                    <li><a>Send us feedback</a></li>
                    <li><a>Help</a></li>
                    <li>© 2020, Filmozo.com</li>
                  </ul>
              </div>
            </div>
          </div>
        </Mobile>
      </div> 
    )
  }
}

export default App