import React , { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props);
    this.counter = {
        count: 0
    };
}

  incrementCount = () => {
    this.setCounter( { count: this.counter.count });
};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 offset-md-10" >
            <div className="page-header">
            <h1>American Dart League</h1>
              <h2>Dart Player Draft List <span className="badge"> {this.counter.count}</span></h2>
              <h3>Once the player is drafted to a new team, the player is responsible for removing themselves. This is very important for helping keep the list up to date and preventing multiple contacts from interested teams.  Names will be removed after two full seasons to keep the list up to date. If you have not been drafted and wish your name to remain active on the draft list please resubmit your infomation.</h3>
            </div>
          </div>
        </div>
      </div>  
    ) ;
  }
}

export default Header;