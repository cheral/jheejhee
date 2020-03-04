import React, {Component} from 'react';
import M from "materialize.min.js";	
import "materialize.min.css";

class Navbar extends Component {	
  componentDidMount() {	
      var elem = document.querySelector(".sidenav");	
      var instance = M.Sidenav.init(elem);	
  }

  render() {
    return(
        <nav className="nav-wrapper">
          <div className="container">
            <a href="#" className="brand-logo">Food Ninja</a>
            <a href="#" className="sidenav-trigger" data-target="mobile-menu">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right">
              <li><a href="">C</a></li>
              <li><a href="">W</a></li>
              <li><a href="">P</a></li>
            </ul>
    
            <ul className="sidenav left" id="mobile-menu">
              <li><a className="subheader">FOODNINJA</a></li>
              <li><a href="/" className="waves-effect">Home</a></li>
              <li><a href="pages/about.html" className="waves-effect">About</a></li>
              <li><div className="divider"></div></li>
              <li><a href="pages/contact.html" className="waves-effect">
                <i className="material-icons">mail_outline</i>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
    
    );	
  }	
}

export default Navbar;