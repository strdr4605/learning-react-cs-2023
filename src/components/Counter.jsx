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
        const newCounter = this.state.counter - 1;
        this.setState({ counter: newCounter });
    }

    increment() {
        const newCounter = this.state.counter + 1;
        this.setState({ counter: newCounter });
    }

    render() {

        return (
            <div className="">
                <h1>Counter: {this.state.counter}</h1>
                <Button onClick={() => this.decrement()}>-1</Button>
                <Button onClick={() => this.increment()}>+1</Button>
            </div>
        );
    }
}