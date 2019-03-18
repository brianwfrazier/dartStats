  import _ from 'lodash';

  class StubAPI {
      constructor() {
          this.contacts = [
              {
              'dart_player': 'Michael',
              'address': '2 Gerwen Drive',
              'phone_number': '132-3212',
              'email': 'michael@email.com',
              'division_requested': 'D'
              },        
              {
              'dart_player': 'Phil',
              'address': '42 Taylor Road',
              'phone_number': '934-4329',
              'email': 'phil@email.com',
              'division_requested': 'C'
              }, 
              {
              'dart_player': 'Hammond',
              'address': '4 Barneveld Ave',
              'phone_number': '432-5832',
              'email': 'Hammond@email.com',
              'division_requested': 'B'
              },
              {
              'dart_player': 'Gary',
              'address': '49 Anderson Road',
              'phone_number': '934-4290',
              'email': 'ganderson@email.com',
              'division_requested': 'A'
              },
              {
              'dart_player': 'Adrian',
              'address': '69 Lewis Street',
              'phone_number': '933-3390',
              'email': 'adrian@email.com',
              'division_requested': 'AA'
              }
          ] ; 
      }

      delete(k) {
          let elements = _.remove(this.contacts, 
              (contact) => contact.phone_number === k
          );
          return elements; 
      }
      getAll() {
          return this.contacts ;
      }

      add(n,a,p,e,d) {
          let len = this.contacts.length ;
          let newLen = this.contacts.push({
            dart_player: n, address : a, phone_number: p, email: e, division_requested: d}) ;
          return newLen > len ;
      }

      update(key,n,a,p,e,d) {
          let index = _.findIndex(this.contacts, 
              (contact) => contact.phone_number === key
          );      
          if (index !== -1) {
              this.contacts.splice(index, 1, 
                  {dart_player: n, address: a, phone_number: p, email: e, division_requested: d});
              return true ;
          }
          return false ;
      }
  }

  export default (new StubAPI() );