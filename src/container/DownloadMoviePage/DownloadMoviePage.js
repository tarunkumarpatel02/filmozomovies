import React, {Component} from 'react';
import './DownloadMoviePage.css';
import axios from 'axios';
import Mobile from '../../hoc/Mobile';
import Desktop from '../../hoc/desktop';
import LargeScreen from '../../hoc/LargeScreen';
import Trailer from '../../assets/trailers/thor.mp4';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import ReactPlayer from 'react-player'

class DownloadMoviePage extends Component{

    state={
        URLParameter:'',
        image:'',
        selectedMovieInfo:[],
        loading:true
    }

    componentWillMount(){
    //    axios.get("https://www.omdbapi.com/?t="+this.props.match.params.title+"&apikey=e0a527f0&page=1-100").then(response=>{
    //         this.setState({selectedMovieInfo:response.data});
    //         console.log(this.state.selectedMovieInfo);
    //    });
    }

    componentDidMount(){
        axios.get("https://www.omdbapi.com/?t="+this.props.match.params.title+"&apikey=e0a527f0&page=1-100").then(response=>{
            this.setState({selectedMovieInfo:response.data});
            console.log(this.state.selectedMovieInfo);
       });
    }
    render(){
        return(
            <div className = "DownloadMoviePage">
                <LargeScreen>
                <div className="col-sm-8">
                            <video className="fullMovie" poster={this.props.location.hash.slice(1)} loop controls >
                                <source src={Trailer} controls type='video/mp4'></source>
                            </video> 
                        </div>
                        <div className="col-sm-4 plotArea">
                            <h1>{this.state.selectedMovieInfo.Title}</h1>

                            IMDb <span>{this.state.selectedMovieInfo.imdbRating}</span>&#160;&#160;&#160;<span>{this.state.selectedMovieInfo.Runtime}</span>&#160;&#160;&#160;<span>{this.state.selectedMovieInfo.Year}</span>
                        
                            <section className="plot">
                                <p style={{fontWeight:"bold",color:"white", maxHeight:"12.17vh"}}>{this.state.selectedMovieInfo.Plot}</p>
                            </section>
                            <table className="table castTable" >
                                <tbody>
                                    <tr>
                                        <td>Director</td>
                                        <td>{this.state.selectedMovieInfo.Director}</td>
                                    </tr>
                                    <tr>
                                        <td>Starring</td>
                                        <td>{this.state.selectedMovieInfo.Actors?this.state.selectedMovieInfo.Actors.split(",").slice(0,3).toString():null}</td>
                                    </tr>
                                    <tr>
                                        <td>Genres</td>
                                        <td>{this.state.selectedMovieInfo.Genre}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <img className="castImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg/220px-Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg"/>
                            <img className="castImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/220px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg"/>
                            <img className="castImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Don_Young_and_Chris_Evans_%28cropped%29.jpg/220px-Don_Young_and_Chris_Evans_%28cropped%29.jpg"/>
                            <img className="castImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Mark_Ruffalo_%2836201774756%29_%28cropped%29.jpg/220px-Mark_Ruffalo_%2836201774756%29_%28cropped%29.jpg"/>
                        </div>
                </LargeScreen>
                <Desktop>
                    {/* <div className="row"> */}
                        <div className="col-sm-8">
                            <video className="fullMovie" poster={this.props.location.hash.slice(1)} loop controls >
                                <source src={Trailer} controls type='video/mp4'></source>
                            </video> 
                        </div>
                        <div className="col-sm-4 plotArea">
                            <h1>{this.state.selectedMovieInfo.Title}</h1>

                            IMDb <span>{this.state.selectedMovieInfo.imdbRating}</span>&#160;&#160;&#160;<span>{this.state.selectedMovieInfo.Runtime}</span>&#160;&#160;&#160;<span>{this.state.selectedMovieInfo.Year}</span>
                        
                            <section className="plot">
                                <p style={{fontWeight:"bold",color:"white", maxHeight:"12.17vh"}}>{this.state.selectedMovieInfo.Plot}</p>
                            </section>
                            <table className="table castTable" >
                                <tbody>
                                    <tr>
                                        <td>Director</td>
                                        <td>{this.state.selectedMovieInfo.Director}</td>
                                    </tr>
                                    <tr>
                                        <td>Starring</td>
                                        <td>{this.state.selectedMovieInfo.Actors?this.state.selectedMovieInfo.Actors.split(",").slice(0,3).toString():null}</td>
                                    </tr>
                                    <tr>
                                        <td>Genres</td>
                                        <td>{this.state.selectedMovieInfo.Genre}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <img className="castImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg/220px-Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg"/>
                            <img className="castImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/220px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg"/>
                            <img className="castImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Don_Young_and_Chris_Evans_%28cropped%29.jpg/220px-Don_Young_and_Chris_Evans_%28cropped%29.jpg"/>
                            <img className="castImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Mark_Ruffalo_%2836201774756%29_%28cropped%29.jpg/220px-Mark_Ruffalo_%2836201774756%29_%28cropped%29.jpg"/>
                        </div>
                    {/* </div>   */}
                </Desktop>
                <Mobile>
                    <div className="col-xs-12">
                        <video className="fullMovie" poster={this.props.location.hash.slice(1)} loop controls>
                            <source src={Trailer} controls type='video/mp4'></source>
                        </video> 
                        {/* <ReactPlayer
                            url={Trailer}
                            playing 
                            style={{width:'100%',height:'100%'
                  }}
                        /> */}
                    </div>
                    <div className="col-xs-12">
                        <h3 style={{color:'#757ab3'}}>{this.state.selectedMovieInfo.Title}</h3>

                        IMDb <span>{this.state.selectedMovieInfo.imdbRating}</span>&#160;&#160;&#160;<span>{this.state.selectedMovieInfo.Runtime}</span>&#160;&#160;&#160;<span>{this.state.selectedMovieInfo.Year}</span>

                        <section className="plotMobile">
                            <p style={{fontWeight:"bold",color:"white", maxHeight:"12.17vh"}}>{this.state.selectedMovieInfo.Plot}</p>
                        </section>
                        <section  className="plotMobile">
                            <div className="col-xs-3 castMobile1"><b>Director :</b></div>
                            <div className="col-xs-9 castMobile">{this.state.selectedMovieInfo.Director}</div>
                            <div className="col-xs-3 castMobile1"><b>Starring :</b></div>
                            <div className="col-xs-9 castMobile">{this.state.selectedMovieInfo.Actors?this.state.selectedMovieInfo.Actors.split(",").slice(0,3).toString():null}</div>
                            <div className="col-xs-3 castMobile1"><b>Genres :</b></div>
                            <div className="col-xs-9 castMobile">{this.state.selectedMovieInfo.Genre}</div>
                        </section>
                            <img className="castImgMobile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg/220px-Robert_Downey%2C_Jr._SDCC_2014_%28cropped%29.jpg"/>
                            <img className="castImgMobile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/220px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg"/>
                            <img className="castImgMobile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Don_Young_and_Chris_Evans_%28cropped%29.jpg/220px-Don_Young_and_Chris_Evans_%28cropped%29.jpg"/>
                            <img className="castImgMobile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Mark_Ruffalo_%2836201774756%29_%28cropped%29.jpg/220px-Mark_Ruffalo_%2836201774756%29_%28cropped%29.jpg"/>
                        {/* <table className="table castTable" >
                            <tbody>
                                <tr>
                                    <td>Director</td>
                                    <td>{this.state.selectedMovieInfo.Director}</td>
                                </tr>
                                <tr>
                                    <td>Starring</td>
                                    <td>{this.state.selectedMovieInfo.Actors?this.state.selectedMovieInfo.Actors.split(",").slice(0,3).toString():null}</td>
                                </tr>
                                <tr>
                                    <td>Genres</td>
                                    <td>{this.state.selectedMovieInfo.Genre}</td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                </Mobile>
            </div>
        )
    }
}

export default DownloadMoviePage;