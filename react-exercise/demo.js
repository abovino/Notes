//Creates 2 divs with name and age
var HelloUser = React.createClass({
  render: function() {
    return (
      <div>
        <div>Hello, {this.props.name}</div>
        <div>My age is {this.props.age}</div>
      </div>
    )
  }
});

//Creates a signup button
var Signup = React.createClass({
  render: function() {
    return (
      <button className="btn btn-primary">Signup!</button>
    )
  }
});

ReactDOM.render(<HelloUser name="Tyler"/>, document.getElementById('app'));
ReactDOM.render(<Signup/>, document.getElementById('signup'));