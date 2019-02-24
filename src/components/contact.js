  import React , { Component } from 'react';

  class Contact extends Component {
    render() {
      return (
          <div className="col-sm-3" >
            <div className="panel panel-primary">
              <div className="panel-heading">
                  { this.props.contact.name }
              </div>
              <div className="panel-body"> 
                <p>{ this.props.contact.name }</p>
                  <p>{ this.props.contact.address }</p>
                  <p>{ this.props.contact.phone_number }</p>              
              </div>
              <div className="panel-footer"> 
                <div className="btn-group btn-group-justified" role="group" aria-label="...">
                    <div className="btn-group" role="group">
                      <button type="button" className="btn btn-default">Edit</button>
                    </div>
                    <div className="btn-group" role="group">
                      <button type="button" className="btn btn-danger">Delete</button>
                    </div>
                </div>                     
              </div>          
            </div>
          </div>
          ) ;
      }
  }

  export default Contact;