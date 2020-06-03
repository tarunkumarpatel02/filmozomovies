import React, { Component } from 'react';
import './tooltip.css';
import axios from 'axios';

class Tooltip extends Component{

       state={
              
       }

       componentWillMount(){

       }
   
       render() {
              return(
               <div>
                     <h1><strong>HTML</strong> inside <code>the</code> <em>tooltip</em></h1>
                </div>
              );
       } 
}
export default Tooltip;