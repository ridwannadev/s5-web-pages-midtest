import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";

export default class HeaderDiv extends Component {
    handleEmailClick = () => {
      const email = 'mailto:ridwanafzn@gmail.com';
      window.location.href = email;
    };
  render() {
    return (
      <Container fluid id="home">
        <Row>
          <Col xxl={6} xl={12} className="order-2 order-xxl-1 header-1 px-5 py-5" style={{ height: '700px' }}>
            <div className="header-1">
                <h1>Bring technology is in your hands</h1>
                <p>
                This technology will bring new things and new experiences to your
                bussines and company
                </p>
                <div className="header-nav">
                    <button className="app-button" onClick={this.handleEmailClick}>Message Me</button>
                    <a href="https://github.com/ridwannadev?tab=repositories" className="header-link">See my project</a>
                </div>
            </div>
          </Col>
          <Col xxl={6} xl={12} className="order-1 order-xxl-2 header-2" style={{ height: '700px' }}>
          </Col>
        </Row>
      </Container>
    );
  }
}
