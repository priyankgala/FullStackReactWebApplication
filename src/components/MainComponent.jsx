import React, { Component } from 'react';
import Menu from './Menu';
import DishDetailComponent from './DishDetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactUsComponent';
import About from './AboutUs';
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

        const DishWithId = ({match}) => {
            // console.log("Main Component match props are: ", match);
                return(
                    <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
                        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
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
                    <Route exact path="/menu/" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path = '/aboutus' component = { () => <About leaders={this.state.leaders}/>}/>
                    <Route exact path = '/contactus' component = {Contact}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer />

            </div>
        );
    }
}

export default App;
