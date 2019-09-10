import React, {Component} from 'react';
import './Navbar.css';

import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
class NavbarReact extends Component{

    constructor() {
        super();
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }

      render() {
        return (
          <div>
            <Navbar className = "Navbar" light>
              <NavbarBrand href="/" className="mr-auto">vicinage</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/about">about</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/contact/">contact</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/adesegunadedeji">gitHub</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }

}
export default NavbarReact