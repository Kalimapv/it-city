import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='main'>
    <Container>
      <Row xs={3} md={4} lg={5}>
        <Col className='first'>
          <Link to='/'>
            <img className="logooo" src="/images/itcity-logo.png" alt="" />
          </Link>
            <p>info@itcityonlinestore.com</p>
            <p>+965 90019287</p>
            <p>IT City online store</p>
            <p> Habeeb al Munawar street</p>
            <p>Maghatheer complex</p>
            <p>Mezzanine floor. Farwaniah, Kuwait</p>
            <p>IT City online store</p>
            <p> Habeeb al Munawar street</p>
        </Col>

        <Col className='second'>
            <h4>Information</h4>
            <div className='Information'>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Condition</p>
            </div>
        </Col>

        <Col className='third'>
            <h4>Categories</h4>
            <div className='Categories'>
            <p>Accessories</p>
            <p>Computers</p>
            <p>Mobiles</p>
            <p>Tablets</p>
            <p>Home Appliances</p>
            <p>Watches & Perfume</p>
            <p>Travel Bags</p>
            <p>Personal Care</p>
            <p>Cameras & Drones</p>
            <p>Offer Zone</p>
            <p>Gaming</p>
            </div>
        </Col>

        <Col className='fourth'>
            <h4>Service</h4>
            <div className='Service'>
            <p>Wishlist</p>
            <p>Shopping Cart</p>
            <p>Return Policy</p>
            <p>About Us</p>
            </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Footer