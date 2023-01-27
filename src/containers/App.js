import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import {robots} from '../components/robots.js'
import {connect} from 'react-redux';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll'
import './App.css';
import { requestRobots, setSearchField } from '../action';

const mapStateToProps = state => {
    return {
            searchField: state.searchRobots.searchField,
            robots: state.requestRobots.robots,
            ispending: state.requestRobots.isPending,
            error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
        
    }
}

class App extends Component{
   

    componentDidMount(){
            this.props.onRequestRobots();
    }

    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ? <h1> Loading </h1>
        :
         (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
               
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                     <Cardlist robots={filteredRobots}/> 
                </Scroll>
            </div>
            ); 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);