import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/home?keyword=${keyword}`);
    } else {
      navigate(navigate(window.location.pathname));
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Row>
        <Col sm={8}>
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            className="mr-sm-2 ml-sm-5"
          ></Form.Control>
        </Col>
        <Col sm={4}>
          <Button type="submit" variant="outline-light" className="p-2">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
