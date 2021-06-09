import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function RenderItem({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home({ dish, leader, promotion }) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderItem item={dish} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderItem item={leader} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderItem item={promotion} />
        </div>
      </div>
    </div>
  );
}

export default Home;
