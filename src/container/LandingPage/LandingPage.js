import React, {Component} from 'react'; 
import Header from '../header';
import Search from '../search';
import Movies from '../MoviePage/movie';
// import axios from '../../hoc/axios-orders';//uncomment this to use postgres
import axios from 'axios';
import './LandingPage.css';
import {Route, Link} from 'react-router-dom';
import DownloadMoviePage from '../DownloadMoviePage/DownloadMoviePage';
import Carousel from 'react-elastic-carousel';
import Mobile from '../../hoc/Mobile';
import Desktop from '../../hoc/desktop';
import LargeScreen from '../../hoc/LargeScreen';
import MobileCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
class LandingPage extends Component {
  

  // touchMoveEventHAndler=(e)=>{
  //   // let Top 
  //   // if(Top <0){
  //   //   window.scrollBy({ top:300,left:0,behavior: 'smooth'});
  //   //   Top = 1;
  //   // }else{
  //   //   window.scrollBy({ top:-300,left:0,behavior: 'smooth'});
  //   //   Top=-1;
  //   // }
  //   // var document= e.target
  //   document.addEventListener('swiped-up', function(e) {
  //     // window.scrollBy({ top:300,left:0,behavior: 'smooth'});
  //     alert("swiped up");
  //   });

  //   document.addEventListener('swiped-down', function(e) {
  //       // window.scrollBy({ top:-300,left:0,behavior: 'smooth'});
  //       alert("swiped down");
  //   })
  // }

  // componentWillMount(){
  //   alert("reloaded");
  // }


  // componentDidMount(){
  //   if(document.querySelector('iframe')){
  //     document.querySelector('iframe').contentDocument.body.querySelector('img').style.height = '100%';
  //     document.querySelector('iframe').contentDocument.body.querySelector('img').style.width = '100%';
  //   }
    
  // }

  render(){
    let carouselMovieList;
    let carouselMovieList2;
    
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
        slidesToSlide: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 993 },
        items: 7,
        slidesToSlide: 5
      },
      tablet: {
        breakpoint: { max: 992, min: 769 },
        items: 2,
        slidesToSlide: 5
      },
      mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 3,
        slidesToSlide: 3
      }
    };
    if(window.innerWidth<=768){
      var movieListMobile =(
        this.props.movieBlock.map(elem=>(
          // use browser history method to remove hash from the url
          <Link className ="hvr" to={{
                    pathname:elem.Title,
                    hash:elem.Poster,
                    key:elem.imdbID}}>
          <Movies 
              Title={elem.Title}
              Year={elem.release_date}
              imdbID={elem.imdbID}
              Poster={elem.Poster}
              zoomIn={this.props.zoomIn}
              zoomOut={this.props.zoomOut}
              trailer={this.props.trailer}
              playTrailer={this.props.playTrailer}
          />
           </Link>
        ))
      );

      var movieListMobile2 =(
        this.props.movieBlock2.map(elem=>(
          // use browser history method to remove hash from the url
          <Link className ="hvr" to={{
                    pathname:elem.Title,
                    hash:elem.Poster,
                    key:elem.imdbID}} >
          <Movies 
              Title={elem.Title}
              Year={elem.release_date}
              imdbID={elem.imdbID}
              Poster={elem.Poster}
              zoomIn={this.props.zoomIn}
              zoomOut={this.props.zoomOut}
              playTrailer={this.props.playTrailer}
          />
           </Link>
        ))
      );
    }
    let movieList =(
      this.props.movieBlock.map(elem=>(
        // use browser history method to remove hash from the url
        // <Link className ="hvr" to={{
        //           pathname:elem.Title,
        //           hash:elem.Poster,
        //           key:elem.imdbID}}>
        <Movies 
            Title={elem.Title}
            Year={elem.release_date}
            imdbID={elem.imdbID}
            Poster={elem.Poster}
            zoomIn={this.props.zoomIn}
            zoomOut={this.props.zoomOut}
            trailer={this.props.trailer}
            playTrailer={this.props.playTrailer}
        />
        //  </Link>
      ))
    );

    let movieList2 =(
      this.props.movieBlock2.map(elem=>(
        // use browser history method to remove hash from the url
        // <Link className ="hvr" to={{
        //           pathname:elem.Title,
        //           hash:elem.Poster,
        //           key:elem.imdbID}} >
        <Movies 
            Title={elem.Title}
            Year={elem.release_date}
            imdbID={elem.imdbID}
            Poster={elem.Poster}
            zoomIn={this.props.zoomIn}
            zoomOut={this.props.zoomOut}
            playTrailer={this.props.playTrailer}
        />
        // </Link>
      ))
    );
    // item.props.children.props.imdbID

    if(window.innerWidth>1600){
      carouselMovieList=
       <Carousel  itemPadding={[0]}  itemsToShow={8} itemsToScroll={5}>
          {movieList.map(item => <div  key='carouselHvr'>{item}</div>)}
       </Carousel>
   
        carouselMovieList2=
         <Carousel  itemPadding={[1]} itemsToShow={8} itemsToScroll={5}>
           {movieList2.map(item => <div  key='carouselHvr'>{item}</div>)}
         </Carousel>
   }

    if(window.innerWidth>992 && window.innerWidth<1600){
       carouselMovieList=
        <Carousel  itemPadding={[0]}  itemsToShow={7} itemsToScroll={7}>
           {movieList.map(item => <div  key='carouselHvr'>{item}</div>)}
        </Carousel>
    
         carouselMovieList2=
          <Carousel itemPadding={[0]} itemsToShow={7} itemsToScroll={5}>
            {movieList2.map(item => <div  key='carouselHvr'>{item}</div>)}
          </Carousel>
    }

    if(window.innerWidth<=500){ // carousel for mobile devices

          carouselMovieList=  
            <MobileCarousel responsive={responsive}>
              {movieListMobile.map(item => <div  key='carouselHvr'>{item}</div>)}
            </MobileCarousel>;

        carouselMovieList2=  
            <MobileCarousel responsive={responsive}>
              {movieListMobile2.map(item => <div  key='carouselHvr'>{item}</div>)}
            </MobileCarousel>;
    }
    // if(window.innerWidth>992){
    //   carouselMovieList=  
    //     <Carousel responsive={responsive}>
    //         {movieList.map(item => <div  key='carouselHvr'>{item}</div>)}
    //     </Carousel>;

    //   carouselMovieList2=  
    //     <Carousel responsive={responsive}>
    //       {movieList2.map(item => <div  key='carouselHvr'>{item}</div>)}
    //     </Carousel>;
    // }
         
    // if(window.innerWidth<=500){
    //   carouselMovieList=  
    //     <Carousel responsive={responsive}>
    //         {movieList.map(item => <div  key='carouselHvr'>{item}</div>)}
    //     </Carousel>;

    //   carouselMovieList2=  
    //     <Carousel responsive={responsive}>
    //       {movieList2.map(item => <div  key='carouselHvr'>{item}</div>)}
    //     </Carousel>;
    //  }
         
    return(
      <div>
          <LargeScreen>
            <div className="row form-group mainContainer">
                <div className="col-sm-12" style={{fontSize:"24px",marginLeft: "32px",fontWeight:"bold",color:"white",marginBottom:"1vh"}}>{this.props.searchTitle?"search results for: "+ this.props.searchTitle:"Popular on Filmozo"}</div>
                <div className=" col-sm-12 col-md-12 movie">
                {carouselMovieList}
                </div> 
                <div className="col-sm-12" style={{fontSize:"24px",marginLeft: "32px",marginTop:"-35px",fontWeight:"bold",color:"white",marginBottom:"1vh"}}>Trending Now</div>
                <div className="col-sm-12 col-md-12 movie">
                    {carouselMovieList2}
                </div> 
              </div>
          </LargeScreen>
          <Desktop>
             <div className="row form-group mainContainer">
                <div className="col-sm-12" style={{fontSize:"24px",marginLeft: "32px",fontWeight:"bold",color:"white",marginBottom:"1vh"}}>{this.props.searchTitle?"search results for: "+ this.props.searchTitle:"Popular on Filmozo"}</div>
                <div className=" col-sm-12 col-md-12 movie">
                {carouselMovieList}
                </div> 
                <div className="col-sm-12" style={{fontSize:"24px",marginLeft: "32px",marginTop:"-35px",fontWeight:"bold",color:"white",marginBottom:"1vh"}}>Trending Now</div>
                <div className="col-sm-12 col-md-12 movie">
                    {carouselMovieList2}
                </div> 
              </div>
            </Desktop>
            <Mobile>
              <div className="row form-group mainContainerMobile" /*style={{paddingTop:"12vw"}}*/>
                <div className="col-xs-12" style={{fontSize:"1.2em",fontWeight:"bold",color:"white",color:"#818181",paddingLeft:"6vw"}}>{this.props.searchTitle?"search results for: "+ this.props.searchTitle:"Popular on Filmozo"}</div>
                <div className="col-xs-12" style={{zIndex:"1", marginBottom:"40px", paddingRight:"5vw", paddingLeft:"6vw"}}>
                  {carouselMovieList} 
                </div>  
                <div className="col-xs-12" style={{fontSize:"1.2em",fontWeight:"bold",color:"white",color:"#818181",paddingLeft:"6vw"}}>Trending Now</div>
                <div className="col-xs-12" style={{zIndex:"1", paddingRight:"5vw", paddingLeft:"6vw"}}>
                  {carouselMovieList2} 
                </div> 
              </div>
            </Mobile> 
        </div>
      );
    }
  } 

export default LandingPage;
