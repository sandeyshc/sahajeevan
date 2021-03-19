import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import "./Filter.scss";
import {
  Accordion,
  Slider,
  Tooltip,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
import { useQuery } from "react-query";
import { getOptions } from "../../services/profile";

function Filter() {
  const [heightValue, setHeightValue] = useState([4.5, 5]),
    [incomeValue, setIncomeValue] = useState([2, 20]),
    { data } = useQuery("getOptions", getOptions, {
      refetchOnWindowFocus: false
    }),
    heightChange = (e, newValue) => {
      setHeightValue(newValue);
    },
    incomeChange = (e, newValue) => {
      setIncomeValue(newValue);
    },
    heightText = value => {
      let temp = String(value).split(".");
      return temp[0] + "'" + (temp[1] ? temp[1] + '"' : "");
    },
    incomeText = value => {
      return "Rs " + value + " Lakh(s)";
    },
    ValueLabelComponent = props => {
      const { children, open, value, labelFn } = props;

      return (
        <Tooltip
          open={open}
          enterTouchDelay={0}
          placement="bottom"
          title={labelFn(value)}
        >
          {children}
        </Tooltip>
      );
    };
  return (
    <div className="filter">
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          as={Card.Header}
          eventKey="0"
          className="d-flex filter__card__header"
          expandIcon={<span class="material-icons">expand_more</span>}
        >
          Marital Status
        </AccordionSummary>
        <AccordionDetails eventKey="0">
          <Card.Body>
            <Form className="filter__form">
              <Form.Check
                className="filter__form__check"
                label="Never Married"
                id="marital__never"
              />
              <Form.Check
                className="filter__form__check"
                label="Divorced"
                id="marital__divorced"
              />
              <Form.Check
                className="filter__form__check"
                label="Separated"
                id="marital__separate"
              />
              <Form.Check
                className="filter__form__check"
                label="Widowed"
                id="marital__widow"
              />
              <div className="filter__form__maritalActions">
                <Button className="filter__form__maritalActions__positive">
                  APPLY
                </Button>
                <Button className="filter__form__maritalActions__negative">
                  CLEAR
                </Button>
              </div>
            </Form>
          </Card.Body>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          as={Card.Header}
          eventKey="0"
          className="d-flex filter__card__header"
          expandIcon={<span class="material-icons">expand_more</span>}
        >
          Height
        </AccordionSummary>
        <AccordionDetails eventKey="0">
          <Card.Body>
            <div className="d-flex filter__card__title justify-content-between">
              <p className="filter__card__title__text">Lorem</p>
              <div className="d-flex filter__card__title__controls">
                <input
                  type="text"
                  value={heightValue[0]}
                  onChange={({ target: { value } }) =>
                    setHeightValue([value, heightValue[1]])
                  }
                />
                <hr className="filter__card__title__controls__separator" />
                <input
                  type="text"
                  value={heightValue[1]}
                  onChange={({ target: { value } }) =>
                    setHeightValue([heightValue[0], value])
                  }
                />
              </div>
            </div>
            <Slider
              className="filter__form__height my-2"
              value={heightValue}
              onChange={heightChange}
              min={data?.results?.height[0].key}
              max={
                data?.results?.height[data?.results?.height?.length - 1]?.key
              }
              step={0.1}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={heightText}
              valueLabelFormat={heightText}
              ValueLabelComponent={props =>
                ValueLabelComponent({ ...props, labelFn: heightText })
              }
            />
            <div className="filter__form__height__actions mt-3">
              <Button className="filter__form__height__actions__positive">
                APPLY
              </Button>
              <Button className="filter__form__height__actions__negative">
                CLEAR
              </Button>
            </div>
          </Card.Body>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          as={Card.Header}
          eventKey="0"
          className="filter__card__header"
          expandIcon={<span class="material-icons">expand_more</span>}
        >
          Highest Qualification
        </AccordionSummary>
        <AccordionDetails eventKey="0">
          <Card.Body>
            <Form className="filter__form">
              <Form.Check
                className="filter__form__check"
                label="All"
                id="qualification__all"
              />
              <Form.Check
                className="filter__form__check"
                label="BCom"
                id="qualification__bcom"
              />
              <Form.Check
                className="filter__form__check"
                label="BSc"
                id="qualification__bsc"
              />
              <Form.Check
                className="filter__form__check"
                label="BE/BTech"
                id="qualification__be"
              />
              <Form.Check
                className="filter__form__check"
                label="BCA"
                id="qualification__bca"
              />
              <Form.Check
                className="filter__form__check"
                label="BBA"
                id="qualification__bba"
              />
            </Form>
          </Card.Body>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          as={Card.Header}
          eventKey="0"
          className="filter__card__header"
          expandIcon={<span class="material-icons">expand_more</span>}
        >
          Occupation
        </AccordionSummary>
        <AccordionDetails eventKey="0">
          <Card.Body>
            <Form className="filter__form">
              <Form.Check
                className="filter__form__check"
                label="All"
                id="occupation__all"
              />
              <Form.Check
                className="filter__form__check"
                label="Government Sector"
                id="occupation__public"
              />
              <Form.Check
                className="filter__form__check"
                label="Private Sector"
                id="occupation__private"
              />
              <Form.Check
                className="filter__form__check"
                label="Own Business"
                id="occupation__own"
              />
              <Form.Check
                className="filter__form__check"
                label="Others"
                id="occupation__others"
              />
            </Form>
          </Card.Body>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          as={Card.Header}
          eventKey="0"
          className="filter__card__header"
          expandIcon={<span class="material-icons">expand_more</span>}
        >
          Income
        </AccordionSummary>
        <AccordionDetails eventKey="0">
          <Card.Body>
            <div className="d-flex filter__card__title justify-content-between">
              <p className="filter__card__title__text">Lorem</p>
              <div className="d-flex filter__card__title__controls">
                <input
                  type="text"
                  value={incomeValue[0]}
                  onChange={({ target: { value } }) =>
                    setIncomeValue([value, incomeValue[1]])
                  }
                />
                <hr className="filter__card__title__controls__separator" />
                <input
                  type="text"
                  value={incomeValue[1]}
                  onChange={({ target: { value } }) =>
                    setIncomeValue([incomeValue[0], value])
                  }
                />
              </div>
            </div>
            <Slider
              className="filter__form__income"
              value={incomeValue}
              onChange={incomeChange}
              min={0}
              max={30}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              ValueLabelComponent={props =>
                ValueLabelComponent({ ...props, labelFn: incomeText })
              }
            />
            <div className="filter__form__income__actions">
              <Button className="filter__form__income__actions__positive">
                APPLY
              </Button>
              <Button className="filter__form__income__actions__negative">
                CLEAR
              </Button>
            </div>
          </Card.Body>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          as={Card.Header}
          eventKey="0"
          className="filter__card__header"
          expandIcon={<span class="material-icons">expand_more</span>}
        >
          Only Paid Members
        </AccordionSummary>
        <AccordionDetails eventKey="0">
          <Card.Body>
            <Form className="filter__form">
              <Form.Check
                className="filter__form__check"
                label="All"
                id="paid__all"
              />
              <Form.Check
                className="filter__form__check"
                label="Lorem Ipsum"
                id="paid__1"
              />
              <Form.Check
                className="filter__form__check"
                label="Lorem Ipsum"
                id="paid__2"
              />
              <Form.Check
                className="filter__form__check"
                label="Lorem Ipsum"
                id="paid__3"
              />
              <Form.Check
                className="filter__form__check"
                label="Others"
                id="paid__4"
              />
              <div className="filter__form__paidmembers">
                <Button className="filter__form__paidmembers__positive">
                  APPLY
                </Button>
                <Button className="filter__form__paidmembers__negative">
                  CLEAR
                </Button>
              </div>
            </Form>
          </Card.Body>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Filter;
