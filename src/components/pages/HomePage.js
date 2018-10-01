import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const HomePage = () => (
  <Container
    fluid
    style={{
      height: "100vh",
      color: "white",
      background: "linear-gradient(to right, #78d5e8, #4286f4)"
    }}
  >
    <Row
      className="align-items-center justify-content-center text-center"
      style={{ height: "100%" }}
    >
      <Col xs={12} sm={6}>
        <img
          className="img-fluid"
          alt="Knowledge Cluster Logo"
          src="https://cdn.pixabay.com/photo/2018/06/27/12/55/artificial-neural-network-3501528_960_720.png"
        />
      </Col>
      <Col
        xs={12}
        sm={6}
        style={{
          fontFamily: "'Open Sans', sans-serif"
        }}
      >
        <h1
          style={{
            boxShadow:
              "6px 0 0 rgba(20,12,10, .7), -6px 0 0 rgba(20,12,10, .7)",
            background: "#0d297c",
            lineHeight: "3rem"
          }}
        >
          BEST SOURCES AT ONE PLACE!
        </h1>
        <br />
        <div className="text-center">
          <Link
            to="/signup"
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#0d297c",
              border: "none"
            }}
          >
            Join Cluster!
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
);

export default HomePage;
