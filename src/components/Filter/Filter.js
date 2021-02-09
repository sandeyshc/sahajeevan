import React from "react";
import { Accordion, Card, Button, AccordionContext, Form } from "react-bootstrap";
import "./Filter.scss";
function Filter() {
  return (
    <div>
      <Accordion  defaultActiveKey="0">
        <Accordion.Toggle as={Card.Header} eventKey="0" className="filter__card__header">
          Marital Status
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
              <Form className="filter__form">
                  <Form.Check className="filter__form__check" label="Never Married" id="marital__never" />
                  <Form.Check className="filter__form__check" label="Divorced" id="marital__divorced" />
                  <Form.Check className="filter__form__check" label="Separated" id="marital__separate" />
                  <Form.Check className="filter__form__check" label="Widowed" id="marital__widow" />
                  <div className="filter__form__maritalActions">
                      <Button className="filter__form__maritalActions__positive">APPLY</Button>
                      <Button className="filter__form__maritalActions__negative">CLEAR</Button>
                  </div>
              </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Accordion>
      <Accordion  defaultActiveKey="0">
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Height
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello!, IM the body</Card.Body>
        </Accordion.Collapse>
      </Accordion>
      <Accordion  defaultActiveKey="0">
        <Accordion.Toggle as={Card.Header} eventKey="0" className="filter__card__header">
          Highest Qualification
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
        <Card.Body>
              <Form className="filter__form">
                  <Form.Check className="filter__form__check" label="All" id="qualification__all" />
                  <Form.Check className="filter__form__check" label="BCom" id="qualification__bcom" />
                  <Form.Check className="filter__form__check" label="BSc" id="qualification__bsc" />
                  <Form.Check className="filter__form__check" label="BE/BTech" id="qualification__be" />
                  <Form.Check className="filter__form__check" label="BCA" id="qualification__bca" />
                  <Form.Check className="filter__form__check" label="BBA" id="qualification__bba" />
              </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Accordion>
      <Accordion  defaultActiveKey="0">
        <Accordion.Toggle as={Card.Header} eventKey="0" className="filter__card__header">
          Occupation
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
        <Card.Body>
              <Form className="filter__form">
                  <Form.Check className="filter__form__check" label="All" id="occupation__all" />
                  <Form.Check className="filter__form__check" label="Government Sector" id="occupation__public" />
                  <Form.Check className="filter__form__check" label="Private Sector" id="occupation__private" />
                  <Form.Check className="filter__form__check" label="Own Business" id="occupation__own" />
                  <Form.Check className="filter__form__check" label="Others" id="occupation__others" />
              </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Accordion>
      <Accordion  defaultActiveKey="0">
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Income
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello!, IM the body</Card.Body>
        </Accordion.Collapse>
      </Accordion>
      <Accordion  defaultActiveKey="0">
        <Accordion.Toggle as={Card.Header} eventKey="0" className="filter__card__header">
          Only Paid Members
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
        <Card.Body>
              <Form className="filter__form">
                  <Form.Check className="filter__form__check" label="All" id="paid__all" />
                  <Form.Check className="filter__form__check" label="Lorem Ipsum" id="paid__1" />
                  <Form.Check className="filter__form__check" label="Lorem Ipsum" id="paid__2" />
                  <Form.Check className="filter__form__check" label="Lorem Ipsum" id="paid__3" />
                  <Form.Check className="filter__form__check" label="Others" id="paid__4" />
                  <div className="filter__form__paidmembers">
                      <Button className="filter__form__paidmembers__positive">APPLY</Button>
                      <Button className="filter__form__paidmembers__negative">CLEAR</Button>
                  </div>
              </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Accordion>
    </div>
  );
}

export default Filter;
