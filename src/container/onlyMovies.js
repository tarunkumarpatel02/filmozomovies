import React,{Component} from 'react';
import axios from 'axios';
import './onlyMovies.css';
class onlyMovies extends Component {

    state={
        onlyMovies:[]
    }

    componentDidMount(){
        let fetchedOrders = [];
        axios.get('https://www.omdbapi.com/?s=movies&apikey=e0a527f0&page=1-100').then(response=>{
            for(let key in response.data.Search){
                fetchedOrders.push(response.data.Search[key]);
              }
        }
        )
    }
    render(){
        return(<div className="onlyMovies">
            <h1>Page under development</h1>
        </div>)
    }
}

export default onlyMovies;