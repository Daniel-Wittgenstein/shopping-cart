
import React from "react"
import './Main.css';
import pic from '../assets/images/pic2.jpg';
import {Container, Row, Col} from 'react-bootstrap'

/*

  Notes:

    <Col md={1}></Col>
      -> acts as a gutter / separator between left and right column
      
      
*/

const Main = () => (
  <main>
      <div className="main text-center">
        
        <Container>
          <Row>
            <Col className="landing-page-left-column" md={4}>
              <div className="landing-page-box">
                <div className="landing-page-heading">Welcome to Wave Wear</div>
                <div className="landing-page-sub-heading">Vintage Fashion since 1974</div>
                <button type="button" className = "landing-page-shop-now-button">Shop now</button>
              </div>
            </Col>
            <Col className="landing-page-right-column" md={8}>
              <Container>
                <Row>
                  <Col md={1}></Col>
                  <Col md={11}>
                  <img className="landing-image" alt="" src = {pic} />
                  </Col>
                </Row>
                
              </Container>
            </Col>
          </Row>


        </Container>


        <Container className="landing-page-bottom-cols-wrapper">
          <Row>
              
              <Col className="landing-page-bottom-col" xs={12} md={4}>
                <div className="landing-page-bottom-col-1-inner">
                    Wave Wear is a premium brand for premium people.
                </div>
              </Col>
              
              <Col className="landing-page-bottom-col" xs={12} md={4}>
                <div className="landing-page-bottom-col-2-inner">
                    Our apparel is 100% cotton and organic.
                </div>
              </Col>
              
              <Col className="landing-page-bottom-col" xs={12} md={4}>
                <div className="landing-page-bottom-col-3-inner">
                    We are the best thing ever. Period.
                </div>
              </Col>

          </Row>
        </Container>

      </div>
  </main>
)

export default Main

