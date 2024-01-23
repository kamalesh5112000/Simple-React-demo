import React from "react"
import UserItem from "./UserItem"
import './UserList.css'

const UserList=(props)=>{
    console.log("userlist",props.users)
    return<ul className="users-list">
        {
            props.users.map((user)=>(
                <UserItem key={user.id} username={user.username} age={user.age}/>
            ))
        }
    </ul>

}
export default UserList