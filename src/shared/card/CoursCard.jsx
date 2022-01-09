import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CoursCard = (props) => {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={props.photo} className="imgo" />{" "}
      <Card.Body className="course-card-body">
        <Card.Title> {props.title} </Card.Title>{" "}
        <Card.Text> {props.coursedesc} </Card.Text>{" "}
      </Card.Body>{" "}
      <ListGroup className="list-group text-center">
        <Card.Link className="link" href={props.link1}>
          {" "}
          {props.coursname1}{" "}
        </Card.Link>
        <Card.Link className="link" href={props.link1}>
          {" "}
          {props.coursname2}{" "}
        </Card.Link>{" "}
        <Card.Link className="link" href={props.link3}>
          {" "}
          {props.coursname3}{" "}
        </Card.Link>
        <Card.Link className="link" href={props.link4}>
          {" "}
          {props.coursname4}{" "}
        </Card.Link>{" "}
      </ListGroup>{" "}
    </Card>
  );
};

export default CoursCard;
