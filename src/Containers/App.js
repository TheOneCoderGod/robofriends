import React,{useState, useEffect} from'react';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox.js';
import Scroll from '../Components/Scroll.js';
import ErrorBoundry from '../Components/ErrorBoundry.js';
import './App.css'


function App() {
    /*constructor() {
        super();
        this.state={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({robots: users})

        })
    }*/

    const[robots,setRobots]=useState([])
    const[searchfield,setSearchfield]=useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            setRobots(users)

        })
    },[])

    const onSearchchange = (event) =>{
        setSearchfield(event.target.value);
    }

    
    const filteredRobots=robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return(
        <div className='tc'>
             <h1 className='f1'>RoboFriends</h1>
             <SearchBox searchChange={onSearchchange}/>
             <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
               
            </div>
        
        );
    
}
export default App;