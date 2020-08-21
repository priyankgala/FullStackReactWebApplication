import React, { Component } from 'react';
import Menu from './Menu';
// import DishDetailComponent from './DishDetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactUsComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
            // selectedDish: null
        };
    }

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }



    render() {
        const Homepage = () => {
            return (
                <Home 
                dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
                leader = {this.state.leaders.filter((leader) => leader.featured)[0]}
                promotion = {this.state.promotions.filter((promotion) => promotion.featured)[0]}
                comment = {this.state.comments.filter((comment) => comment.featured)[0]}
                />
            );
        }

        return (
            <div>
                <Header />
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
                <Switch>
                    <Route path="/home" component={Homepage} />
                    <Route path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path = '/contactus' component = {Contact}/>
                    <Redirect to="/home"/>

                </Switch>
                <Footer />

            </div>
        );
    }
}

export default App;
