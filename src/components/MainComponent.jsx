import React, { Component } from 'react';
import Menu from './Menu';
import DishDetailComponent from './DishDetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            // selectedDish: null
        };
    }

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }



    render() {
        const Homepage = () => {
            return (
                <Home />
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
                    <Redirect to="/home"/>
                </Switch>
                <Footer />

            </div>
        );
    }
}

export default App;
