import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import UserConsumer from './Context';
import './CreateUser.css'

function CreateUser() {

  const [id, setId] = useState("");  
  const [name, setName] = useState("");  
  const [surname, setSurname] = useState("");  
  const [department, setDepartment] = useState("Computer Engineering");  
  const [age, setAge] = useState(18);  
  const [phoneNumber, setPhoneNumber] = useState("");  

  const history = useHistory();

  const AddUser = (e, dispatch) => {
    e.preventDefault();
    const newUser = { id, name, surname, department, age, phoneNumber};
    dispatch({type: "CREATE_USER", payLoad: newUser});
    alert("STUDENT ADDED SUCCESFULLY!");
    history.push("/students");
  }

  return (
    <UserConsumer>
        {
            value => {
                const {dispatch} = value;
                return(
                    <div>
                        <form onSubmit={(e) => {AddUser(e, dispatch)}} >
                            <br/>
                            <label>Student ID</label> <br/>
                            <input type = "text" required value={id} onChange={(e) => {setId(e.target.value)}} /> <br/><br/> 

                            <label>Name</label> <br />
                            <input type = "text" required value={name} onChange={(e) => {setName(e.target.value)}} /> <br/><br/> 

                            <label>Surname</label> <br/>
                            <input type = "text" required value={surname} onChange={(e) => {setSurname(e.target.value)}} /> <br/><br/> 

                            <label>Department</label> <br />
                            <select required value={department} onChange={(e) => {setDepartment(e.target.value)}} >
                                <option value = 'Computer Engineering'> Computer Engineering </option>
                                <option value = 'Mechanical Engineering'> Mechanical Engineering </option>
                                <option value = 'Electric-Electronic'> Electric-Electronic Engineering </option>
                                <option value = 'Civil Engineering'> Civil Engineering </option>
                            </select> <br/> <br/> 

                            <label>Age</label> <br />
                            <select required value={age} onChange={(e) => {setAge(e.target.value)}} >
                                <option value = '18'> 18 </option>
                                <option value = '19'> 19 </option>
                                <option value = '20'> 20 </option>
                                <option value = '21'> 21 </option>
                                <option value = '22'> 22 </option>
                                <option value = '23'> 23 </option>
                                <option value = '24'> 24 </option>
                                <option value = '25'> 25 </option>
                                <option value = '26'> 26 </option>
                                <option value = '27'> 27 </option>
                            </select> <br/> <br/> 

                            <label>Phone Number</label> <br/>
                            <input type = "text" value={phoneNumber} required onChange={(e) => {setPhoneNumber(e.target.value)}} /> <br/><br/> 
                            
                            <button>ADD STUDENT</button>
                        </form>
                    </div>
                )
            }
        }
    </UserConsumer>
  )
}

export default CreateUser;
