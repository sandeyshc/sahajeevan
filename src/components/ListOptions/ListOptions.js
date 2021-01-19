import React, { useState } from "react";
import "./ListOptions.scss";
import { ListGroup, ListGroupItem, Image } from "react-bootstrap";

function ListOptions({ options }) {
  const [selected, setSelected] = useState(1);
  return (
    <ListGroup className="list">
      {options.map(({ text, icon }, index) => (
        <ListGroupItem action className={"list__item " + (selected === index + 1 ? "active": "")} key={text} onClick={() => setSelected(index + 1)}>
          <Image src={icon} height="25" className="list__item__img" />
          {text}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default ListOptions;
