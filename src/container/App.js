import React, {Component} from 'react';
import LandingPage from '../container/LandingPage/LandingPage';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import DownloadMoviePage from '../container/DownloadMoviePage/DownloadMoviePage';
import Header from '../container/header';
import axios from 'axios';
import Search from '../container/search';
import ReactDOM from 'react-dom';
import { Parallax } from 'react-scroll-parallax';
import Mobile from '../hoc/Mobile';
import Desktop from '../hoc/desktop';

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
    windowWidth :window.innerWidth
  }



  zoomIn=(e)=>{
    // e.target.style.transform= "scale(1.4)";
    // e.target.closest(".movieBlock").style.padding="34px 50px";
    // e.target.closest(".rec.rec-slider").style.height="237px";
    // e.target.closest(".rec.rec-carousel").style.height="236.90625px"; //uncomment this only
    // e.target.closest(".rec.rec-swipable-carouselHvr").style.paddingTop="34px";//uncomment this only
    var sliderContents = e.target.closest(".rec.rec-slider").querySelectorAll(".rec.rec-swipable-carouselHvr");
    [...sliderContents].map(elem=>{
      elem.style.transform= "translateX(-25%)";
    });
    for(var i=[...sliderContents].indexOf(e.target.closest(".rec.rec-swipable-carouselHvr"))+1;i<[...sliderContents].length;i++){
      [...sliderContents][i].style.transform= "translateX(25%)";
    }
    // var swipable = e.target.closest(".rec.rec-carousel").querySelectorAll(".rec.rec-swipable-carouselHvr");
    // [...swipable].map(elem=>{
    //   elem.style.transform= "translateX(20%)";
    // });
     e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "scale(1.5)";//uncomment this only
    //  e.target.closest(".rec.rec-swipable-carouselHvr").style.transitionDelay=" 0.5s";
    //  e.target.closest(".rec.rec-swipable-carouselHvr").style.transition=" all 300ms linear;";
    //  e.target.closest(".rec.rec-slider").style.transitionDelay=" 0.5s";
    // e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "translateX(-20%)";
    // e.target.style.transform= "scale(1.4)"
    // e.target.closest('.rec.rec-item-wrapper').style.width="350px";
    // e.target.closest(".rec.rec-slider").style.transform= "translateX(-20%)";
}

zoomOut=(e)=>{
  // e.target.style.transform= "scale(1)";
  // e.target.closest(".movieBlock").style.padding="0px 0px";
  // e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "translateX(0%)";
  var sliderContents = e.target.closest(".rec.rec-slider").querySelectorAll(".rec.rec-swipable-carouselHvr");
  [...sliderContents].map(elem=>{
    elem.style.transform= "translateX(0%)";
  });
  e.target.closest(".rec.rec-swipable-carouselHvr").style.transform= "scale(1)";//uncomment this only
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

  componentWillMount(){
    let fetchedOrders = [];
    console.log(this.state.genre);
    axios.get("https://www.omdbapi.com/?s=man&apikey=e0a527f0&page=1-100").then(response=>{
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
        this.state.name="";
    }else{
      searchTerm = this.state.name;
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
    // var mobileArea = document.querySelector("body");

    if(document.querySelector("#mySidenav").style.width==="250px"){
    	document.querySelector("#mySidenav").style.width = "0px";
    }else{
    	document.querySelector("#mySidenav").style.width = "250px";
    }
    // mobileArea.addEventListener("click", function(e){
    //   document.querySelector("#mySidenav").style.width = "0px";
    // })
  }
  render(){
     return(
      <div className="container-fluid mainApp">
        <BrowserRouter>
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
                  {/* <Route path="/" exact render={()=><LandingPage zoomOut={this.zoomOut} zoomIn={this.zoomIn} movieBlock={this.state.movieBlock} movieBlock2={this.state.movieBlock2}/>}/>
                  <Route path='/:title' component={DownloadMoviePage}/> */}
                  <Route path={process.env.PUBLIC_URL + '/'} exact render={()=><LandingPage zoomOut={this.zoomOut} zoomIn={this.zoomIn} movieBlock={this.state.movieBlock} movieBlock2={this.state.movieBlock2}/>}/>
                  <Route path={process.env.PUBLIC_URL +'/:title'} component={DownloadMoviePage}/> 
              </Switch> 

              <Desktop>
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
              </Desktop>
              <Mobile>
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
              </Mobile>
          
        </BrowserRouter>
      </div>
    )
  }
}

export default App