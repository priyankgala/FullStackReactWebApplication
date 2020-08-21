import React from 'react';
// import { render } from '@testing-library/react';
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap';

function RenderItem({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col col-md m-1">
                    <RenderItem item={props.dish} />
                </div>
                <div className="col col-md m-1">
                    <RenderItem item={props.leader} />
                </div>
                <div className="col col-md m-1">
                    <RenderItem item={props.promotion} />
                </div>
            </div>
        </div>
    );
}

export default Home;