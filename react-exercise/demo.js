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
ReactDOM.render(<HelloUser name="Tyler"/>, document.getElementById('app'));