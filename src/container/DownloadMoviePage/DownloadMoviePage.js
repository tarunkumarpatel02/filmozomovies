import React, {Component} from 'react';
import './DownloadMoviePage.css';

class DownloadMoviePage extends Component{

    state={
        URLParameter:'',
        image:''
    }

    componentWillMount(){
        console.log(this.props.location.hash.slice(1));
    }

    componentDidMount(){
        console.log(this.props.location.hash.slice(1));
    }
    render(){
        return(
            <div className = "DownloadMoviePage">
                <h2>Click on the link to download</h2>
                <h3>{this.props.match.params.title}</h3>
                <img src={this.props.location.hash.slice(1)}/>
                <h3>Its broken!!! will be fixed soon...</h3>
            </div>
        )
    }
}

export default DownloadMoviePage;