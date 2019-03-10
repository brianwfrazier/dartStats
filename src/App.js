import React , { Component } from 'react';
import './App.css';
import Header from './components/header' 
import ContactForm from './components/contactForm' 
import ContactList from './components/contactList' 
import api from './dataStore/stubAPI'  // NEW

class App extends Component {
    render() {
        let contacts = api.getAll() ;    // NEW
        return (    
            <div className="jumbotron">
                <Header noContacts={contacts.length} />
                <ContactForm />
                <ContactList contacts={contacts}  />  
            </div>                      
            );
    }
}

export default App;