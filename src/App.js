import './App.css';
import User from './user/User';
import Post from './post/Post';
import { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Request from './lib/Request';

class App extends Component{
  state = {
    name: 'Future Skill'
  }
  onNameChange = name => {
    this.setState({name : name})
  }
  render(){
    const {name} = this.state;
    return (
      <div>Hello {name}
        <div>
          <Link to="/">Home</Link>
          <Link to="/users">User</Link>
          <Link to="/posts">Post</Link>
        </div>
        <Route path="/users" 
          component={()=> (
            <Request url="https://jsonplaceholder.typicode.com/users">
              {data => 
              <User data={data}/>
              }
            </Request>
          )}
        ></Route>
        <Route path="/posts" component={Post}></Route>
      </div>
    );
  }

}

export default App;
