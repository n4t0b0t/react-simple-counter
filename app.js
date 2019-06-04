function Display(props) {
  return (
    <div className={props.count < 0 ? "negative display" : "positive display"}>
      {props.count}
    </div>
  );
}

function Button(props) {
  return (
    <button className={props.class} onClick={props.handleClick}>
      {props.text}
    </button>
  );
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
  }

  incrementCount() {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  }

  decrementCount() {
    this.setState(state => {
      return { count: state.count - 1 };
    });
  }

  render() {
    return (
      <div>
        <div className="counter">
          <Display count={this.state.count} />
          <Button
            text="Increment"
            class="positive display"
            handleClick={this.incrementCount.bind(this)}
          />
          <Button
            text="Decrement"
            class="negative display"
            handleClick={this.decrementCount.bind(this)}
          />
        </div>
      </div>
    );
  }
}

function randInt() {
  return Math.floor(Math.random() * 10);
}

function App(props) {
  //other method
  // const counters = [
  //   {id: "123", initialcount: randInt()},
  //   { id: "123", initialcount: randInt()}
  // ]

  // const counterItems = counts.map(counter => {return <Counter key={counter.id} count={counter.initialCount}/>})

  // return <React.Fragment>{counterItems}</React.Fragment>

  // index can only be used if array is not push/pop
  const counterArr = Array(props.num).fill();
  return counterArr.map((number, index) => {
    return <Counter key={index} count={randInt()} />;
  });
}

const element = <App num={10} />;

const container = document.querySelector("#app");

ReactDOM.render(element, container);
