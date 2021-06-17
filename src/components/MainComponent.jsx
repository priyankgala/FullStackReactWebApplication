import React, { Component } from 'react';
import Menu from './Menu';
import DishDetailComponent from './DishDetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactUsComponent';
import About from './AboutUs';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux"

const mapStateToProps = (state) =>{
    return{
        dishes: state.dishes,
        leaders: state.leaders,
        comments: state.comments,
        promotions: state.promotions,
    }        
}

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     //Removing the state from main component to use Redux
    //     // this.props = {
            
    //     // };
    // }
    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }
    
    render() {
        const Homepage = () => {
            return (
                <Home 
                dish = {this.props.dishes.filter((dish) => dish.featured)[0]}
                leader = {this.props.leaders.filter((leader) => leader.featured)[0]}
                promotion = {this.props.promotions.filter((promotion) => promotion.featured)[0]}
                comment = {this.props.comments.filter((comment) => comment.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            // console.log("Main Component match props are: ", match);
                return(
                    <DishDetailComponent dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
                        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    />
                );
        }

        return (
            <div>
                <Header />
                {/* <Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetailComponent dish={this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]} /> */}
                <Switch>
                    <Route path="/home" component={Homepage} />
                    <Route exact path="/menu/" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path = '/aboutus' component = { () => <About leaders={this.props.leaders}/>}/>
                    <Route exact path = '/contactus' component = {Contact}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer />

            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(App));
