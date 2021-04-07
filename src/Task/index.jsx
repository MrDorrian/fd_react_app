import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: true,
      count: 0,
      step: 1,
    };
  }

  onChangeAdd = () => {
    this.setState({ isAdding: true });
  };

  onChangeMinus = () => {
    if ((this.isAdding = true)) {
      this.setState({ isAdding: false });
    }
  };

  addCount = () => {
    const { count, step, isAdding } = this.state;
    if (!isAdding) {
      this.setState({ count: count - step });
    } else {
      this.setState({ count: count + step });
    }
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ step: Number(value) });
  };

  render() {
    const { count, step, isAdding } = this.state;
    return (
      <div>
        <h1>Hello,Counter :{count}</h1>
        <h2>Текущее значение множителя:{step}</h2>
        <div>
          <h4>Введите значение : </h4>
          <input onChange={this.handleChange} type='number' name='step' />
          {!isAdding ? (
            <button onClick={this.onChangeAdd}>+</button>
          ) : (
            <button onClick={this.onChangeMinus}>-</button>
          )}
        </div>
        <button type='submit' onClick={this.addCount}>
          Добавить
        </button>
      </div>
    );
  }
}

export default Counter;
