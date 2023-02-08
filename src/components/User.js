import React, { useState } from 'react'
import {FaUser, FaTrash} from 'react-icons/fa';
import UserConsumer from './Context';
import './User.css';

function User(props) {

    const {id, name, surname, department, age, phoneNumber} = props;

    const [visible, setVisible] = useState(false);

    const deleteUser = (dispatch) => {
        dispatch({type: "DELETE_USER", payLoad: id})
        alert("STUDENT DELETED SUCCESFULLY!");
    }

    return (
        <UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className='div-user'>
                            <div className='header'>
                                <FaUser className='icon-user'  />
                                <span className='name' onClick={() => {setVisible(!visible)}}> {name + " " + surname} </span>
                                <FaTrash className='icon-trash' onClick = {() => {deleteUser(dispatch)}} />
                            </div>
                            {
                                visible &&  <div>
                                                <p className='sub-info'> Student ID: {id} </p>
                                                <p className='sub-info'> Department: {department} </p>
                                                <p className='sub-info'> Age: {age} </p>
                                                <p className='sub-info'> Phone Number: {phoneNumber} </p>
                                            </div>
                            }
                         </div>
                    )
                }
            }
        </UserConsumer>
    )
}

export default User;
