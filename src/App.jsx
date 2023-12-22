//import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

// import BlogList from './src/components/BlogList';
// import BlogPost from './src/components/BlogPost';
// import Navbar from './src/components/Navbar';
// import Login from './src/components/Login';
// import CreatePost from './src/components/CreatePost';


import Home from "./components/Home/Home";
import Register from './components/Register/Register';
import Login from './components/Login/Login';

import "./style.scss";
import BlogPost from './components/BlogPost/BlogPost';
import Write from './components/Write/Write';



const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Home />,
 },
  {
   path: "/post/:id",
   element: <BlogPost />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  }
]);
function App() {
    return (
      // <>
      //  <Home />
      // </>
      <div className='app'>
        <div className='container'>
         <RouterProvider router={router} />
        </div>
      </div>
        
    //     <Router>
    //        <Home />
    //         <Switch>
    //             {/* <Router exact path="/" component={Home}/> */}
    //             <Router path="/post/:id" component={BlogPost} />
    //             <Router path="/login" component={Login}/>
    //             <Router path="/register" component={Register}/>
                
    //             {/* <Router path="/create" component={CreatePost}/> */}
    //         </Switch> 
    //     </Router>
     );
}

export default App;
