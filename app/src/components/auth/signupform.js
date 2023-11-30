import '../../pages/auth/login.css'
import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {updateUserInfo} from '../../reducers/authReducer';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { signup } from '../../action/auth';


function SignupForm() {
    const token = useSelector(state=>state.authReducer.token)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    
    const nameHandler =(event)=>{
        setName(event.target.value)
       }

    const emailHandler =(event)=>{
     setEmail(event.target.value)
    }
    const passwordHandler =(event)=>{
        setPassword(event.target.value)
       }
    const submitHandler = async (event) =>{
        event.preventDefault();
        console.log(name,email,password)
        if(name && email && password){
        dispatch(signup({name,email,password},navigate))
        }
        else{
            alert("Please enter all fields")
        }
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form className="input-fields">
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        className="custom-input"
                        onChange={nameHandler}
                    />
                </div>
                <br/>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="custom-input"
                        onChange={emailHandler}
                    />
                </div>
                <br />
                <div>
                    <input
                        type="password"
                        placeholder="password"
                        className="custom-input"
                        onChange={passwordHandler}
                    />
                </div>
                <br />
                <button type="submit" onClick={submitHandler} className="login-button">
                    SignUp
                </button>
            </form>
            <div style={{ paddingTop: "30px" }}>
                        <span>
                             Already have an account?{"  "}
                            <span style={{ color: "#007bff" }}><Link to='/login'>Login </Link></span>
                        </span>
            </div>
        </div>
    )
}
export default SignupForm;