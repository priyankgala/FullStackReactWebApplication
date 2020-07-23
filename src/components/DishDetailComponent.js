import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetailComponent extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><b>{dish.name}</b></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(dish) {
        // console.log(dish.comments.date);
        const comments = dish.comments.map((comnt) => {
            return (
                <ul className="list-unstyled">
                    <li>{comnt.comment}</li><br />
                    <li>-- {comnt.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comnt.date))}</li>
                </ul>
            );
        });
        // console.log('Hello these are the comments'+comments);

        return (
            <div>
                {comments}
            </div>
        );

    }

    render() {
        const dish = this.props.dish;
        console.log(dish);

        if (dish != null)
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardBody>
                                    <div className="row">
                                        <h4><b>Comments</b></h4>
                                    </div>
                                    <div className="row">
                                        {this.renderComments(this.props.dish)}
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        else
            return (
                <div></div >
            );
    }
}

export default DishDetailComponent;