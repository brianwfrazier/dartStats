import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import SelectControls from '../src/components/selectControls';
import { action } from '@storybook/addon-actions';
import Header from './components/header' 
import ContactForm from './components/contactForm' 
import ContactList from './components/contactList' 
import api from './dataStore/stubAPI' 


storiesOf('Phone Catalogue', module)
.add('Select controls', 
  () =>   <SelectControls 
            onUserInput={ action('input changed') }
            filterText='' /> 
)
            .add('Phone', 
                () =>  <Phone phone={Phones[0]} /> 
            )
            .add('Phone list', 
                () =>  <PhoneList phones={Phones} /> 
            )

