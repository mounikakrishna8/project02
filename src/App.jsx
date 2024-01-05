import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import Home from "./pages/Home";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreatePost from './pages/CreatePost';
//import LogoutButton from './components/LogoutButton';
import SinglePostPage from './pages/SinglePage';
import Write from './pages/Write/Write.jsx';

import "./style.scss";


const router = createBrowserRouter([
 
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"/post/:id",
        element:<SinglePostPage />
      },
      {
        path: "/CreatePost",
        element: <CreatePost />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/Register",
        element: <RegisterPage />,
      },
      {
        path:"/Write",
        element: < Write/>,
      }

]);


function App() {
    return (
    
      <div className='app'>
        <div className='container'>
         <RouterProvider router={router} />
        </div>
      </div>
        
     );
}



export default App;
