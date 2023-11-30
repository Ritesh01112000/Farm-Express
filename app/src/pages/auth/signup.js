import Image from "../../assets/FarmBGM.jpg";
import "./login.css";
import SignupForm from '../../components/auth/signupform'

const Signup = () => {  
  
    return (
        <div>
            <div className="image-container">
                <img src={Image} alt="Sample" width="100%" height="200%" />
                <div className="app-name-box">
                    <h1><u>New to the Farm<b><span style={{color:"red"}}>Express...</span></b></u></h1>
                    <br/>
                    <br/>
                    <h4>Cultivate Success without the Overhead</h4>
                    <h4>Rent Farm Machines with Ease, </h4>
                    <h4> Sow the Seeds of Efficiency!</h4>
                </div>
                <div className="white-box">
                    <SignupForm/>
                    
                   
                </div>
                
            </div>
        </div>
    );
};
export default Signup;
