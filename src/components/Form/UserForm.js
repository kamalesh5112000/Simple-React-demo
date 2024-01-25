import React,{useState , useRef} from 'react';
import './UserForm.css';
import ErrorModal from './ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const UserForm=(props)=>{

    const collegeInputRef=useRef();
    

    const [enteredusername, setEnteredusername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const UsernameHandler=(e)=>{
        setEnteredusername(e.target.value)


    }
    const AgeHandler=(e)=>{
        setEnteredAge(e.target.value)
        

    }

    const submitHandler=(e)=>{

        e.preventDefault();
        const enteredcollege=collegeInputRef.current.value;
        const userdata={
            username:enteredusername,
            age:enteredAge,
            college:enteredcollege
        }
        if (enteredusername.trim().length === 0 || enteredAge.trim().length === 0 || enteredcollege.trim().length===0) {
            setError({
              title: 'Invalid input',
              message: 'Please enter a valid name , age (non-empty values) and college.',
            });
            return;
          }
          if (+enteredAge < 1) {
            setError({
              title: 'Invalid age',
              message: 'Please enter a valid age (> 0).',
            });
            return;
          }
        props.onSaveUserData(userdata)
        setEnteredAge("");
        setEnteredusername("")
        collegeInputRef.current.value=''
    }
    const errorHandler = () => {
        setError(null);
      };

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
                />
            )}
            <form onSubmit={submitHandler}>
            <div className="new-user">
            <div className="new-user__control">
                <label>Username</label>
                <input type='text' value={enteredusername} onChange={UsernameHandler} ></input>
            </div>
            <div className="new-user__control">
                <label>Age</label>
                <input type='Number' value={enteredAge} onChange={AgeHandler} ></input>
            </div>
            <div className="new-user__control">
                <label>College Name</label>
                <input type='text'  ref={collegeInputRef}></input>
            </div>
            <div className='new-user__actions'>
            <button type='submit'>Add User</button>
        </div>
            
        </div>
        

        </form>

        </Wrapper>
        
    )

}

export default UserForm;