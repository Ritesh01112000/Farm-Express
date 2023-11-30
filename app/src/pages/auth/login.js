import Image from "../../assets/FarmBGM.jpg";
import "./login.css";
import LoginForm from '../../components/auth/loginform'

const Login = () => {  
  
    return (
        <div>
            <div className="image-container">
                <img src={Image} alt="Sample" width="100%" height="200%" />
                <div className="app-name-box">
                    <h1><u><b>Farm<span style={{color:"red"}}>Express...</span></b></u></h1>
                    <h4>Purpose of this App will come here</h4>
                </div>
                <div className="white-box">
                    <LoginForm/>
                </div>
                
            </div>
        </div>
    );
};
export default Login;
