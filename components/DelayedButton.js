const React = require('react');

class DelayedButton extends React.Component {

  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick(event){
      console.log(event.screenX);
      event.persist();
      setTimeout(()=>{this.props.onDelayedClick(event)}, this.props.delay)
    }

    render(){
      return <button onClick = {this.handleClick} className="delayed">The Delayed Button</button>
    }
  }

module.exports = DelayedButton
