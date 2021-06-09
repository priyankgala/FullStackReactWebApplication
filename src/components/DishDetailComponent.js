import React from "react";
import {
  BreadcrumbItem,
  Breadcrumb,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>
          <b>{dish.name}</b>
        </CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comments }) {
  const returnObj = comments.map((cmnt) => {
    return (
      <ul className="list-unstyled">
        <li>{cmnt.comment}</li>
        <li>
          -- {cmnt.author}, &nbsp;
          {/* {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(cmnt.date))} */}
          {cmnt.date}
        </li>
      </ul>
    );
  });

  return <div>{returnObj}</div>;
}

const DishDetail = (props) => {
  // console.log("Props in DishDetial are: ", props);
  const dish = props.dish;
  if (dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name} </h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardBody>
                <div className="row">
                  <h4>
                    <b>Comments</b>
                  </h4>
                </div>
                <div className="row">
                  <RenderComments comments={props.comments} />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default DishDetail;
