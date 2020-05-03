import React from 'react';
 import './buttons.css';

const button =(props)=>{
    var CLASS='';
    if(props.type==='success'){
        CLASS='btn btn-success';
    }else if(props.type==='danger'){
        CLASS='btn btn-danger';
    }else if(props.type==='info'){
        CLASS='btn btn-info';
    }else if(props.type==='warning'){
        CLASS='btn btn-warning';
    }
    return(
        <div className='buttons'>
            <button className={CLASS} onClick={props.clicked}>{props.name}</button>
        </div>
    );
}

export default button;