import React from 'react';
import '../container/search.css';
import AUX from '../hoc/auxiliary';
import Buttons from '../Buttons/button';
import Dropdown from '../container/Dropdown/Dropdown';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import myImage from '../assets/images/circle-cropped.png'
import {Route, Link} from 'react-router-dom';
import Desktop from '../hoc/desktop';
import Tablet from '../hoc/Tablet';
import Mobile from '../hoc/Mobile';

const search =(props)=>{
    var genreList=props.genrelist.map(elem=>(
        <tr key={elem}>
            <td><a href="#"  onClick={props.searchHandler}>{elem}</a></td>
        </tr>
        ));

        // var imdb=props.imdb.map(elem=>(
        // <li><a style={{color:"#449fcf"}}>{elem}</a></li>
        // ));
    return(
        <div className='row'>
            {/* <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" style={{float:"left",marginLeft:"1vw"}} class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <Link  to={{
                        pathname:process.env.PUBLIC_URL + '/'}}>
                        <img src={myImage} height="50" className="logoImg"/>  
                   </Link> 
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <Dropdown clicked={props.searchHandler} genre={props.genrelist} imdb={props.imdb}/></div>
                        <Paper className="paper pull-right navbar-form">
                        <InputBase placeholder="Search Movies"  variant="outlined" label="search movies" value={props.name}
                        className="inputBase" id="outlined-warning" style={{ fontSize: 15 }} onChange={props.nameChangeHandler} onKeyDown={props.searchHandlerOnEnter} ></InputBase>
                            <IconButton type="submit"  className="iconButton" aria-label="search" onClick={props.searchHandler} >
                                <SearchIcon style={{ fontSize: 30,color:"#41bbce" }} />
                            </IconButton>
                        </Paper>
                        
                </div>
            </nav> */}
            <Desktop>
            <div className="col-md-6 headerSearchLeft">
                <div className="col-md-5 logo">
                   <Link  to={{
                        pathname:process.env.PUBLIC_URL + '/'}}>
                        <img src={myImage} height="50" className="logoImg"/>  
                   </Link>  
                </div>
                <div className="col-md-7 dropdownList ">
                    <Dropdown clicked={props.searchHandler} genre={props.genrelist} imdb={props.imdb}/>
                </div>
                
            </div>
            <div className="col-md-6 headerSearchRight">
                <div className="col-md-10 textSearch">
                    <Paper className="paper">
                    <InputBase placeholder="Search Movies"  variant="outlined" label="search movies" value={props.name}
                    className="inputBase" id="outlined-warning" style={{ fontSize: 15 }} onChange={props.nameChangeHandler} onKeyDown={props.searchHandlerOnEnter} ></InputBase>
                        <IconButton type="submit"  className="iconButton" aria-label="search" onClick={props.searchHandler} >
                            <SearchIcon style={{ fontSize: 30,color:"#41bbce" }} />
                        </IconButton>
                    </Paper>
                </div>
                <div className="col-md-2 userProfile">
                   
                   <div><AccountCircleIcon style={{ fontSize: 30, color:"#e5e5e5" }}/> </div>
                   <div className="userName">Tarun</div>
                </div>    
            </div>
            </Desktop> 
            <Tablet>This is tablet width</Tablet>
            <Mobile>
                <table style={{width:"100%"}}>
                    <tbody>
                        <tr>
                            <td style={{paddingLeft:"5vw"}}>
                                <img style={{height:"7vw",width:"7vw",marginRight:"2vw"}} onClick={props.toggleSideMenu} src={"https://assets.nflxext.com/ffe/siteui/akira/fallback/hamburger.gif"}></img>
                                <Link  to={{
                                    pathname:process.env.PUBLIC_URL + '/'}}>
                                    <img src={myImage} height="50" className="logoImgMbl"/>  
                                </Link> 
                            </td>
                            <td style={{paddingRight:"5vw"}}>
                            <Paper className="paperMobile">
                                <InputBase placeholder="Search" style={{ height: "8.5vw",fontSize: 15,paddingLeft:"1vw" }}  variant="outlined" label="search movies" value={props.name}
                                id="outlined-warning"  onChange={props.nameChangeHandler} onKeyDown={props.searchHandlerOnEnter} ></InputBase>
                                    <IconButton type="submit"  aria-label="search" onClick={props.searchHandler} style={{ padding:"0vw"}} >
                                        <SearchIcon style={{ fontSize: "7vw",color:"#41bbce", padding:"1vw"}} />
                                    </IconButton>
                            </Paper> 
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="mySidenav" className="sidenav">
                    <ul className="nav nav-stacked">
                        <li style={{borderBottom:"0.5px solid white"}}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td> <a href="#" ><AccountCircleIcon style={{ fontSize: 35, color:"#e5e5e5" }}/></a></td>
                                        <td style={{paddingLeft:"2vw", fontSize:"5vw"}}><span><a href="#">Tarun</a></span></td>
                                    </tr>
                                </tbody>
                            </table> 
                            <table>
                                <tbody>
                                    <tr>
                                        <td><a href="#">Account settings</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">Sign out of Filmozo</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">Membership</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">Help Centre</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">Downloads</a></td>
                                    </tr>
                                </tbody>
                            </table>       
                        </li>  
                        <li>
                            <table>
                                <tbody>
                                    {genreList}
                                </tbody>
                            </table>
                        </li>  
                    </ul> 
                </div>
            </Mobile>
        </div>
    );
}

export default search ;