const React = require('react');

class CoordinatesButton extends React.Component {

  constructor(props){
    super();
    this.handleClick = this.handleClick.bind(this);

    this.onReceiveCoordinates = props.onReceiveCoordinates;

  }
    handleClick(event){
      console.log(event.clientX);
      console.log(event.clientY);
      let position = [event.clientX, event.clientY];
      this.onReceiveCoordinates(position);
    }

  render(){
    return <button onClick = {this.handleClick} className="coords">The Coordinates Button</button>
  }
}

module.exports = CoordinatesButton;
