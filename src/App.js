import React , { Component } from 'react';
import './App.css';
import Header from './components/header' 
import ContactForm from './components/contactForm' 
import ContactList from './components/contactList' 
//import api from './dataStore/stubAPI'  
import * as api from './api';
import _ from 'lodash';


class App extends Component {

    addContact = (n, a, p, e, d) => {
         api.add(n,a,p, e, d) ;
         this.setState({});
    };
    deleteContact = (key) => {
        api.delete(key); 
        this.setState({});                          
    };

   render() {
        let contacts = api.getAll() ;    
        return (    
            <div className="jumbotron">
                <Header noContacts={contacts.length} />
                <ContactForm  addHandler={this.addContact} />
                <ContactList contacts={contacts} 
                      deleteHandler={this.deleteContact} /> 
                </div>                     
            );
    }

}

export default App;