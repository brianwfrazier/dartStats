import React , { Component } from 'react';

  class ContactForm extends Component {
      state = { dart_player: '', address: '', phone_number : '', email: '', division_requested: ''};
      handleSubmit = (e) => {
        e.preventDefault();
        let dart_player = this.state.dart_player.trim();
        let address = this.state.address.trim();
        let phone_number = this.state.phone_number.trim();
        let email = this.state.email.trim();
        let division_requested = this.state.division_requested.trim();
        if (!dart_player || !address || !phone_number || !email || !division_requested) {
            return;
        }
        this.props.addHandler(dart_player,address,phone_number,email,division_requested);
        this.setState({dart_player: '', address: '', phone_number:'', email: '', division_requested: ''});
    }
      handleNameChange = (e) =>  this.setState({dart_player: e.target.value});
      handleAddressChange = (e) => this.setState({address: e.target.value});
      handlePhoneNumChange = (e) =>  this.setState({phone_number: e.target.value});
      handleEmailChange = (e) =>  this.setState({email: e.target.value});
      handleDivisionChange = (e) =>  this.setState({division_requested: e.target.value});

      render() {
          return (
              <div className="container-fluid">
                  <div className="row">
                  <div className="col-sm-2" >
                    <input type="text" className="form-control" 
                        placeholder="dart_player"
                        value={this.state.dart_player}
                        onChange={this.handleNameChange}
                    />
                  </div>  
                  <div className="col-sm-2" >
                    <input type="text" className="form-control"
                        placeholder="Address"
                        value={this.state.address}
                        onChange={this.handleAddressChange}
                    />
                  </div>
                  <div className="col-sm-2" >
                    <input type="text" className="form-control" 
                        placeholder="Phone No."
                        value={this.state.phone_number}
                        onChange={this.handlePhoneNumChange}
                    />
                  </div> 
                  <div className="col-sm-2" >
                    <input type="text" className="form-control" 
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                  </div>   
                  <div className="col-sm-2" >
                    <input type="text" className="form-control" 
                        placeholder="Divsion Requested"
                        value={this.state.division_requested}
                        onChange={this.handleDivisionChange}
                    />
                  </div> 
                  <div className="col-sm-2" >
                     <button type="button" className="btn btn-primary"
                         onClick={this.handleSubmit} >Add Draft Request</button>
                  </div>                                          
                </div>
              </div>
          );
      }
  }
  export default ContactForm;