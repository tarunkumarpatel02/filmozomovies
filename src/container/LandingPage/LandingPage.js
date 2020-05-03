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
class LandingPage extends Component {
  render(){
    let movieList =(
      this.props.movieBlock.map(elem=>(
        // use browser history method to remove hash from the url
        <Link className ="hvr" to={{
                  pathname:'/'+elem.Title,
                  hash:elem.Poster}}>
        <Movies 
            Title={elem.Title}
            Year={elem.release_date}
            imdbID={elem.imdbID}
            Poster={elem.Poster}
            zoomIn={this.props.zoomIn}
            zoomOut={this.props.zoomOut}
        />
        </Link>
      ))
    );

    let movieList2 =(
      this.props.movieBlock2.map(elem=>(
        // use browser history method to remove hash from the url
        <Link className ="hvr" to={{
                  pathname:'/'+elem.Title,
                  hash:elem.Poster}}>
        <Movies 
            Title={elem.Title}
            Year={elem.release_date}
            imdbID={elem.imdbID}
            Poster={elem.Poster}
            zoomIn={this.props.zoomIn}
            zoomOut={this.props.zoomOut}
        />
        </Link>
      ))
    );
    // item.props.children.props.imdbID
    let carouselMovieList=(
    <Carousel focusOnSelect={true} itemPadding={[0]} itemsToShow={7} itemsToScroll={5}>
       {movieList.map(item => <div  key='carouselHvr'>{item}</div>)}
    </Carousel>)

let carouselMovieList2=(
  <Carousel focusOnSelect={true} itemPadding={[0]} itemsToShow={7} itemsToScroll={5}>
     {movieList2.map(item => <div  key='carouselHvr'>{item}</div>)}
  </Carousel>)

    return(
        <div className="row form-group mainContainer">
          <div className="col-sm-12" style={{fontSize:"24px",marginLeft: "32px",fontWeight:"bold",color:"white"}}>Popular on Filmozo</div>
          <div className="col-sm-12 col-md-12 movie">
           {carouselMovieList}
          </div> 
          <div className="col-sm-12" style={{fontSize:"24px",marginLeft: "32px",marginTop:"-34px",fontWeight:"bold",color:"white"}}>Trending Now</div>
          <div className="col-sm-12 col-md-12 movie">
              {carouselMovieList2}
          </div>  
        </div>
      );
    }
  } 

export default LandingPage;
