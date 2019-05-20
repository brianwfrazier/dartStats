import LoginPage from './components/loginPage';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import DartStatApp from './App';
import CommentPage from './components/commentsPage';
//import loadUsers from './userData';


    const Router = (props) => {
        return (
            <BrowserRouter>
              <div className="jumbotron">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-9 col-md-offset-3" >
                      <h1>Title</h1>
                    </div>
                  </div>
                </div>
                <Switch>
                    <Route path='/posts/:post_id' component={ CommentPage } />
                    <Route path='/login' component={LoginPage} />                   
                    <Route exact path='/' component={ DartStatApp } />
                    <Redirect from='*' to='/' />
                </Switch>
              </div>
            </BrowserRouter>
        );
    };

    ReactDOM.render((
        <Router/> 
    ), document.getElementById('root')) ;

    

