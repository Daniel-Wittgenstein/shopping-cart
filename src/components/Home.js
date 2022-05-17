
//import Layout from "./Layout";


//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


import Header from './Header'
import Footer from './Footer'
import LandingPage from './LandingPage'


function Home() {
  return (
    <>
      <Header></Header>
      <LandingPage></LandingPage>
      <Footer></Footer>
    </>
  )
}



/*
      <header>WaveShop</header>
      <main>Ride the wave!</main>
      <footer>(c) Me 2022</footer>
      
      <Container>
        <Row>
          <Col>N main bar</Col>
          <Col md={4} className="d-none d-md-block">optional side</Col>
        </Row>
      </Container>

*/


export default Home

