import LeftLayout from "./components/Left/LeftLayout";
import { RightLayout } from "./components/Right/RightLayout";
import './Login.css';
function Login(){
    return(
        <div className="login-container">
            <LeftLayout></LeftLayout>
            <RightLayout></RightLayout>
         
        </div>
    )
}
export default Login;