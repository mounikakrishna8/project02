// import React from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import BlogList from './src/components/BlogList';
// import BlogPost from './src/components/BlogPost';
// import Navbar from './src/components/Navbar';
// import Login from './src/components/Login';
// import CreatePost from './src/components/CreatePost';

import TopBar from "./topbar/TopBar";
function App() {
    return (
        // <div className="App"> 
        //     blog app
        // </div>
        <TopBar />
        // <Router>
        //     <Navbar />
        //     <Switch>
        //         <Router exact path="/" component={BlogList}/>
        //         <Router path="/post/:id" component={BlogPost} />
        //         <Router path="/login" component={Login}/>
        //         <Router path="/create" component={CreatePost}/>
        //     </Switch>
        // </Router>
    )
}

export default App;
