


//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import CartPic from '../assets/images/cart.svg';
import './Header.css';


function Header() {
  return (
    <>
    <Navbar className="navbar-custom" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="nav-brand-text">Wave Wear</Navbar.Brand>




        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-link-nav-outer">
            <Container className="nav-link-nav-wrapper">
              <Nav.Link href="/shop" className="nav-link">
                <div className="navbar-quasi-button">
                  Shop
                </div>
              </Nav.Link>
              <Nav.Link href="/contact" className="nav-link">
                <div className="navbar-quasi-button">
                    Contact
                </div>
              </Nav.Link>

              <Nav.Link href="/contact" className="nav-link nav-cart-icon">
                <div className="navbar-round-quasi-button">
                  <img src={CartPic} alt="shopping cart" className="cart-icon-img" />    
                </div>    
              </Nav.Link>


            </Container>

          </Nav>
        </Navbar.Collapse>

    
      
      </Container>
    </Navbar>
    </>
  )
}

export default Header

