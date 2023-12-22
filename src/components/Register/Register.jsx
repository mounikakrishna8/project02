// import  { useState } from 'react';
import {Link} from "react-router-dom";

// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         //IMplement login logic here
//         console.log('Login:', username, password);
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Username:</label>
//                 <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     )
// }

// export default Login;



export default function Register() {
  return (
    <div className="auth">
        <h1>Register</h1>
        <form>
            <input required type="text" placeholder= "username"/>
            <input required type="email" placeholder= "email"/>
            <input required type="password" placeholder="password"/>
            <button>Login</button>
            <span>Do you have an account? <Link to="/login">Login</Link></span>

            

        </form>
    </div>
  )
}
