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

const search =(props)=>{
    return(
        <div className='row'>
            <div className="col-sm-12 col-md-6 headerSearchLeft">
                <div className="col-sm-6 col-md-5 logo">
                     <img src={myImage} height="50" className="logoImg"/> 
                </div>
                <div className="col-sm-6 col-md-7 dropdownList ">
                    <Dropdown clicked={props.searchHandler} genre={props.genrelist} imdb={props.imdb}/>
                </div>
                
            </div>
            <div className="col-sm-12 col-md-6 headerSearchRight">
                <div className="col-sm-6 col-md-9 textSearch">
                    <Paper className="paper">
                    <InputBase placeholder="Search Movies"  variant="outlined" label="search movies" value={props.name}
                    className="inputBase" id="outlined-warning" style={{ fontSize: 15 }} onChange={props.nameChangeHandler} ></InputBase>
                        <IconButton type="submit"  className="iconButton" aria-label="search" onClick={props.searchHandler} >
                            <SearchIcon style={{ fontSize: 30,color:"#41bbce" }} />
                        {/*  style={{ fontSize: 30,color:"#41bbce" }} */}
                        </IconButton>
                    </Paper>
                </div>
                <div className="col-sm-6 col-md-3 userProfile">
                   
                   <div><AccountCircleIcon style={{ fontSize: 30, color:"#41bbce" }}/> </div>
                   <div className="userName">Tarun</div>
                </div>    
            </div>
        </div>
    );
}

export default search ;