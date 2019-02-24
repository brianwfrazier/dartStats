import React , { Component } from 'react';
import './App.css';
import Header from './components/header' 
import ContactForm from './components/contactForm' 
import ContactList from './components/contactList' ;
let contacts = [
  {
      "name": "Contact 1",
      "address": "123 Test St",
      "phone_number": "132-3212"
  },       
  {
      "name": "Contact 2",
      "address": "23 Main St",
      "phone_number": "934-4329"
  },        
  {
      "name": "Contact 3",
      "address": "4 Lower St",
      "phone_number": "432-5832"
  },            
  {
      "name": "Contact 4",
      "address": "49 Upper Street",
      "phone_number": "934-4290"
  },
  {
      "name": "Contact 5",
      "address": "4 High Street",
      "phone_number": "933-4110"
  }                
] ;    

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
          <Header />
          <ContactForm  />
          <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;