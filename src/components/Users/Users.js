import React from 'react';
import Card from './Card';
import UserList from './UserList';
import './Users.css';

const Users=(props)=>{
    return(
        <div>
            <Card className='users'>
                <UserList users={props.users}/>

            </Card>

        </div>
    );

};

export default Users

