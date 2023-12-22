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



export default function Login() {
  return (
    <div className="auth">
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>Login</button>
            <p>Username or password is not valid!</p>
            <span>Do not have an account? <Link to="/register">Create New Account</Link></span>

            

        </form>
    </div>
  )
}
