import React from 'react'

class CoordinatesButton extends React.Component {
  getCoordinates(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return <button onClick = {this.getCoordinates.bind(this)}> click me </button>
  }
}

export default CoordinatesButton
