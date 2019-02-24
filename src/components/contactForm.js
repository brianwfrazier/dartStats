import React , { Component } from 'react';

 class ContactForm extends Component {
    render() {
      return (
        <div className="container-fluid">
          <div className="row">
             <div className="col-sm-2" >
              <button type="button" className="btn btn-success">Add Contact</button>
            </div>              
            <div className="col-sm-3" >
              <input type="text" className="form-control" defaultValue="Enter name"/>
            </div>
            <div className="col-sm-3" >
              <input type="text" className="form-control" defaultValue="Enter address"/>
            </div>
            <div className="col-sm-2" >
               <input type="text" className="form-control" defaultValue="Enter telephone"/>
            </div>                             
           </div>
        </div>
        );
    }
  }

  export default ContactForm;