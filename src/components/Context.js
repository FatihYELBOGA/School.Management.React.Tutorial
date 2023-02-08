import React, { Component } from 'react'
import axios from 'axios';

const UserContext = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case "DELETE_USER":
      axios.delete("http://localhost:8080/students/"+action.payLoad);
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payLoad)
      }
    case "CREATE_USER":
      axios.post("http://localhost:8080/students", action.payLoad);
      return {
        ...state,
        users: [...state.users, action.payLoad]
      }

    default:
      return false;
  }
}

export class UserProvider extends Component {

  state = {
    users : [],
    dispatch : action => {
      this.setState(state => reducer(state, action));
    }
  }

  componentDidMount = async () =>{
    const response = await axios.get("http://localhost:8080/students");
    this.setState({
      users: response.data
    });
  }

  render () {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;