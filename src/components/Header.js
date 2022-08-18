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
                            <p class="lead">I'm Abbey, a full-stack developer based in Denver with a passion for merging beauty
                                and function.</p>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center text-sm-end">
                            <a class="btn mb-4" background-color= '#8aa5a7'  href="#portfolio">See my work</a>
                        </div>
                    </div>
                </div>
        </div>
        {/* <div class="container-fluid bg-light text-dark p-5">
            <div class="container bg-light p-5">
                <h1 class="display-1 fw-bold">Welcome to Admin Dashboard</h1>
                
                <p>Go to My Website</p>

            </div>
        </div> */}
        <Navbar style={{backgroundColor: '#8aa5a7'}} sticky='top' expand='md'>

            <NavbarToggler onClick={()=> setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-3' navbar>
                    <NavItem style={{color: '#E9E9E9', textDecoration: 'none'}}>
                      <a href='#about' class="m-2" >About</a>
                    </NavItem>
                    <NavItem>
                      <a href='#portfolio' class='m-2'>Portfolio</a>
                    </NavItem>
                </Nav>
            </Collapse>
            
        </Navbar>
        
    </div>
       
    )
}

export default Header;