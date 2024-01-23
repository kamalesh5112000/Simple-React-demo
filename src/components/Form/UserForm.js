import React,{useState} from 'react';
import './UserForm.css'

const UserForm=(props)=>{
    const [enteredusername, setEnteredusername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const UsernameHandler=(e)=>{
        setEnteredusername(e.target.value)


    }
    const AgeHandler=(e)=>{
        setEnteredAge(e.target.value)
        

    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const userdata={
            username:enteredusername,
            age:enteredAge
        }
        props.onSaveUserData(userdata)
        setEnteredAge("");
        setEnteredusername("")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-user">
            <div className="new-user__control">
                <label>Username</label>
                <input type='text' value={enteredusername} onChange={UsernameHandler}></input>
            </div>
            <div className="new-user__control">
                <label>Age</label>
                <input type='Number' value={enteredAge} onChange={AgeHandler}></input>
            </div>
            <div className='new-user__actions'>
            <button type='submit'>Add User</button>
        </div>
            
        </div>
        

        </form>
    )

}

export default UserForm;