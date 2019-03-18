  import React , { Component } from 'react';
  import buttons from '../config/buttonsConfig';
import _ from 'lodash';
import api from '../dataStore/stubAPI'

  class Contact extends Component {
    state = {
      status : '',
      dart_player: this.props.contact.dart_player,
      address: this.props.contact.address,
      phone_number: this.props.contact.phone_number,
      email: this.props.contact.email,
      division_requested: this.props.contact.division_requested,
      previousDetails: {
        dart_player: this.props.contact.dart_player,
        address: this.props.contact.address,
        phone_number: this.props.contact.phone_number,
        email: this.props.contact.email,
        division_requested: this.props.contact.division_requested   
      }
    };
      handleEdit = () =>  this.setState({ status : 'edit'} );
      handleSave = (e) => {
        e.preventDefault();
        let updatedName= this.state.dart_player.trim();
        let updatedAddress = this.state.address.trim();
        let updatedPhone_number = this.state.phone_number.trim();
        let updatedEmail = this.state.email.trim();
        let updatedDivision = this.state.division_requested.trim(); 
        if (!updatedName || !updatedAddress || !updatedPhone_number || !updatedEmail || !updatedDivision) {
            return ;
        }
        let {dart_player, address, phone_number, email, division_requested} = this.state ;
        this.setState({status : '',
            previousDetails: { dart_player, address, phone_number, email, division_requested  }
        })
        api.update( this.state.previousDetails.phone_number,
            updatedName , updatedAddress, updatedPhone_number, updatedEmail, updatedDivision )
    };
      handleCancel = () => {
        let {dart_player, address, phone_number, email, division_requested} = this.state.previousDetails ;
        this.setState({ status : '', 
        dart_player, address, phone_number, email, division_requested } ) ;
      }; 
      handleNameChange = (e) =>  this.setState({dart_player: e.target.value});
      handleAddressChange = (e) => this.setState({address: e.target.value});  
      handlePhoneNumChange = (e) =>  
                this.setState({phone_number: e.target.value});
      handleEmailChange = (e) => this.setState({email: e.target.value});
      handleDivisionChange = (e) => this.setState({division_requested: e.target.value});
      handleDelete = () =>  this.setState({ status : 'del'} );
      handleConfirm = (e) => {
                  e.preventDefault();
                  this.props.deleteHandler(this.state.phone_number);
                };  
        shouldComponentUpdate(nextProps, nextState) {
                    let currentContact = {
                        dart_player: this.state.dart_player,
                        address: this.state.address,
                        phone_number: this.state.phone_number,
                        email: this.state.email,
                        division_requested: this.state.division_requested
                    }
                    let same = _.isEqual(nextProps.contact, currentContact)
                    return !same || (nextState.status === 'edit' )
                      || (nextState.status !== this.state.status)
                };          
      render() {
        console.log(`Contact - ${this.props.contact.dart_player}` )
            let activeButtons = buttons.normal ;
            let leftButtonHandler = this.handleEdit;
            let rightButtonHandler = this.handleDelete;
            if (this.state.status === 'edit' ) {
                activeButtons = buttons.edit ;
                leftButtonHandler = this.handleSave;
                rightButtonHandler = this.handleCancel ;
            } else if (this.state.status === 'del' ) {
                activeButtons = buttons.delete ;
                leftButtonHandler = this.handleCancel ;
                rightButtonHandler = this.handleConfirm;
            }    
            return (
              <div className="col-sm-3" >
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        { this.state.dart_player }
                    </div>
                    <div className="panel-body">
                    {  this.state.status === 'edit' ? 
                        [ 
                        <input type="text" className="form-control"
                            value={this.state.dart_player}
                            onChange={this.handleNameChange} />,
                        <input type="text" className="form-control"
                            value={this.state.address}
                            onChange={this.handleAddressChange} />,
                        <input type="text" className="form-control"
                            value={this.state.phone_number}
                            onChange={this.handlePhoneNumChange} />,
                        <input type="text" className="form-control"
                            value={this.state.email}
                            onChange={this.handleEmailChange} />,
                        <input type="text" className="form-control"
                            value={this.state.division_requested}
                            onChange={this.handleDivisionChange} />
                        ] :
                        [
                            <p key={'dart_player'}>{this.state.dart_player}</p>,
                            <p key={'address'} >{this.state.address}</p>,
                            <p key={'phone_number'} >{this.state.phone_number}</p>,
                            <p key={'email'} >{this.state.email}</p>,
                            <p key={'division_requested'} >{this.state.division_requested}</p>,
                        ]   
                    }        
                    </div>
                    <div className="panel-footer"> 
                      <div className="btn-group btn-group-justified" role="group" aria-label="...">
                        <div className="btn-group" role="group">
                            <button type="button" 
                                className={'btn ' + activeButtons.leftButtonColor} 
                                onClick={leftButtonHandler} >
                                {activeButtons.leftButtonVal}
                            </button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" 
                                className={'btn ' + activeButtons.rightButtonColor} 
                                onClick={rightButtonHandler} >
                                {activeButtons.rightButtonVal}
                            </button>  
                        </div>
                    </div>                     
                    </div>          
                </div>
              </div>
            ) ; 
          }
      } 
      export default Contact;