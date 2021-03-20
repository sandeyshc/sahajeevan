import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import "./Filter.scss";
import {
  Accordion,
  Slider,
  Tooltip,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
import { useQuery, useMutation } from "react-query";
import { getOptions, search, saveFilter } from "../../services/profile";

function Filter({ data, setProfiles }) {
  const [filterData, setFilterData] = useState(),
    { data: Options } = useQuery("getOptions", getOptions, {
      refetchOnWindowFocus: false
    }),
    { mutate, isSuccess, data: SearchProfiles } = useMutation(formData =>
      search(formData)
    ),
    heightText = value => {
      let temp = String(value).split(".");
      return temp[0] + "'" + (temp[1] ? temp[1] + '"' : "");
    },
    ageText = value => {
      return value + " Years";
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
    },
    handleCheck = (name, id, checked) => {
      setFilterData({
        ...filterData,
        [name]: checked
          ? [...filterData[name], id]
          : filterData[name].filter(v => v !== id)
      });
    },
    handleSlide = (name, value) => {
      setFilterData({
        ...filterData,
        [name]: {
          from: value[0],
          to: value[1]
        }
      });
    },
    applyFilter = () => {
      saveFilter(filterData);
      mutate(filterData);
    };
  useEffect(() => {
    if (data) {
      setFilterData(data);
    }
  }, [data]);
  useEffect(() => {
    isSuccess && setProfiles(SearchProfiles?.results);
    !SearchProfiles && mutate(data);
  }, [isSuccess, SearchProfiles]);
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
              {Options?.results?.marital_status.map(opt => (
                <Form.Check
                  key={opt.key}
                  id={"marital_status" + opt.key}
                  className="filter__form__check"
                  label={opt?.value}
                  value={opt?.key}
                  checked={filterData?.marital_status?.indexOf(opt.key) > -1}
                  onChange={({ target: { checked } }) =>
                    handleCheck("marital_status", opt.key, checked)
                  }
                />
              ))}
              <div className="filter__form__maritalActions">
                <Button
                  className="filter__form__maritalActions__positive"
                  onClick={applyFilter}
                >
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
            <div className="d-flex filter__card__title justify-content-between align-items-center">
              <p className="filter__card__title__text m-0">Lorem</p>
              <div className="d-flex filter__card__title__controls">
                <input
                  type="text"
                  value={filterData?.height?.from}
                  onChange={({ target: { value } }) =>
                    setFilterData({
                      ...filterData,
                      height: { ...filterData?.height, from: value }
                    })
                  }
                />
                <hr className="filter__card__title__controls__separator" />
                <input
                  type="text"
                  value={filterData?.height?.to}
                  onChange={({ target: { value } }) =>
                    setFilterData({
                      ...filterData,
                      height: { ...filterData?.height, to: value }
                    })
                  }
                />
              </div>
            </div>
            <Slider
              className="filter__form__height my-2"
              value={[filterData?.height?.from, filterData?.height?.to]}
              onChange={(e, newValue) => handleSlide("height", newValue)}
              min={Options?.results?.height[0].key}
              max={
                Options?.results?.height[Options?.results?.height?.length - 1]
                  ?.key
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
              <Button
                className="filter__form__height__actions__positive"
                onClick={applyFilter}
              >
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
              {Options?.results?.qualification.map(opt => (
                <Form.Check
                  key={opt.key}
                  id={"qualification" + opt.key}
                  className="filter__form__check"
                  label={opt?.value}
                  value={opt?.key}
                  checked={filterData?.qualification.indexOf(opt.key) > -1}
                  onChange={({ target: { checked } }) =>
                    handleCheck("qualification", opt.key, checked)
                  }
                />
              ))}
              <div className="filter__form__maritalActions">
                <Button
                  className="filter__form__maritalActions__positive"
                  onClick={applyFilter}
                >
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
          className="filter__card__header"
          expandIcon={<span class="material-icons">expand_more</span>}
        >
          Occupation
        </AccordionSummary>
        <AccordionDetails eventKey="0">
          <Card.Body>
            <Form className="filter__form">
              {Options?.results?.occupation.map(opt => (
                <Form.Check
                  key={opt.key}
                  id={"occupation" + opt.key}
                  className="filter__form__check"
                  label={opt?.value}
                  value={opt?.key}
                  checked={filterData?.occupation.indexOf(opt.key) > -1}
                  onChange={({ target: { checked } }) =>
                    handleCheck("occupation", opt.key, checked)
                  }
                />
              ))}
              <div className="filter__form__maritalActions">
                <Button
                  className="filter__form__maritalActions__positive"
                  onClick={applyFilter}
                >
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
          className="filter__card__header"
          expandIcon={<span class="material-icons">expand_more</span>}
        >
          Age
        </AccordionSummary>
        <AccordionDetails eventKey="0">
          <Card.Body>
            <div className="d-flex filter__card__title justify-content-between align-items-center">
              <p className="filter__card__title__text m-0">Lorem</p>
              <div className="d-flex filter__card__title__controls">
                <input
                  type="text"
                  value={filterData?.age?.from}
                  onChange={({ target: { value } }) =>
                    setFilterData({
                      ...filterData,
                      age: { ...filterData?.age, from: value }
                    })
                  }
                />
                <hr className="filter__card__title__controls__separator" />
                <input
                  type="text"
                  value={filterData?.age?.to}
                  onChange={({ target: { value } }) =>
                    setFilterData({
                      ...filterData,
                      age: { ...filterData?.age, to: value }
                    })
                  }
                />
              </div>
            </div>
            <Slider
              className="filter__form__height my-2"
              value={[filterData?.age?.from, filterData?.age?.to]}
              onChange={(e, newValue) => handleSlide("age", newValue)}
              min={18}
              max={60}
              step={1}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={ageText}
              ValueLabelComponent={props =>
                ValueLabelComponent({ ...props, labelFn: ageText })
              }
            />
            <div className="filter__form__height__actions mt-3">
              <Button
                className="filter__form__height__actions__positive"
                onClick={applyFilter}
              >
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
