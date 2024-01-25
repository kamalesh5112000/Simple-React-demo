import React from "react"
import Card from "./Card"
import './UserItem.css'

const UserItem=(props)=>{
    console.log(props)
    return <div>
        <Card className='user-item'>
            <h2>{props.username} ({props.age} years old)</h2>
            <h2>{props.college}</h2>

        </Card>
    </div>

}
export default UserItem