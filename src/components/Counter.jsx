import React from 'react';
import Button from './Button';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    decrement() {
        const newCounter = this.state.counter - (this.props.step || 1);
        this.setState({ counter: newCounter });
    }

    increment() {
        const newCounter = this.state.counter + (this.props.step || 1);
        this.setState({ counter: newCounter });
    }

    render() {

        return (
            <div className="border border-2 border-red-400 p-2 m-2">
                <h1>Counter: {this.state.counter}</h1>
                <Button onClick={() => this.decrement()}>-{this.props.step || 1}</Button>
                <Button onClick={() => this.increment()}>+{this.props.step || 1}</Button>
            </div>
        );
    }
}