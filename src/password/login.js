import './parol.css'
import {NavLink} from "react-router-dom";
const Login=()=>{
    const onclick=()=>{
    }
    return <div className={'login'}>
        <label><input  className={'login1'}  type="text"/>Login</label>
        <div><input  className={'login1'} type="text"/> Parole</div>
        <button className={'login2'} onClick={onclick}>Click Me</button>
        <NavLink to={'/register'}>Register</NavLink>
    </div>
}
export default Login