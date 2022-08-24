import {useState} from 'react'
import { Navbar,
        Button, 
        NavbarBrand,
        Collapse,
        NavbarToggler,
        Nav,
        NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return(

        <div>
            <div className="jumbotron">
                <div class="container mb-5">
                    <div class="row">
                        <div class="col text-center text-sm-end">
                            <h1 id="header" class="display-3">Abbey Drake</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center text-sm-end offset-sm-5">
                            <p class="lead">I'm Abbey, a full-stack developer based in Denver with a passion for merging beautyand function.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center text-sm-end">
                            <a class="btn mb-4" background-color= '#8aa5a7'  href="#portfolio">See my work</a>
                        </div>
                    </div>
                </div>
            </div>
        
            <Navbar fixed="top" sticky='top' expand='md' style={{backgroundColor: '#8aa5a7', height: '14vh'}} dark>
                <NavbarToggler onClick={()=> setMenuOpen(!menuOpen)}/>
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-3' navbar>
                        <NavItem style={{color: '#E9E9E9', textDecoration: 'none'}}>
                        <a href='#about' class="m-1" >About</a>
                        </NavItem>
                        <NavItem>
                        <a href='#portfolio' class='m-1'>Portfolio</a>
                        </NavItem>
                        <NavItem>
                        <a href='#contact' class='m-1'>Contact</a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
       
        </div>
       
    )
}

export default Header;