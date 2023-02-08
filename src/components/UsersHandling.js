import React from 'react'
import User from './User'
import PropTypes from 'prop-types'
import UserConsumer from './Context'

function UsersHandling() {

    return (
        <div className='users'>
            <h1 className='title'>STUDENTS</h1>
            <UserConsumer>
                {
                    value => {
                        const {users} = value;
                        return (
                            <div>
                                {
                                    users.map(user => {    
                                        return (
                                            <User 
                                                key={user.id}
                                                id={user.id}
                                                name={user.name}
                                                surname={user.surname}
                                                department={user.department}
                                                age={user.age}
                                                phoneNumber={user.phoneNumber}
                                            />
                                    )
                                    })
                                }
                            </div>
                        )
                    }
                }
            </UserConsumer>
        </div>
    )
}

User.defaultProps = {
    id: "NULL",
    name: "NULL",
    surname: "NULL",
    department: "NULL",
    age: 0,
    phoneNumber: "NULL"
}

User.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    department: PropTypes.string,
    age: PropTypes.number,
    phoneNumber: PropTypes.string
}

export default UsersHandling;
