import React from 'react';
import classNames from 'classnames/bind';
import styles from './DinningTable.scss'
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

const cx = classNames.bind(styles);
const seats_amount = 12;

class DinningTable extends React.Component {

  static PropTypes = {
    limitation: React.PropTypes.number,
    guests: React.PropTypes.Array
  }

  constructor(props) {
    super(props);
    this.state = {
      seats: this.initialState(props)
    }
    console.log(this.initialState(props))
  }

  componentDidMount () {
    this.drawCirle();
  }

  componentDidUpdate() {
    document.getElementsByTagName('svg')[0].remove();
    this.drawCirle();
  }

  render() {
    return (
        <div className={ cx('dinning-table') } id="dinning-table">
        </div>
    )
  }

  initialState = (props) => {
    let seats = [];
    let seats_be_taken = props.guests.length;
    props.guests.forEach(() => {
      seats.push({
        status: 'taken'
      });
    });
    for (var i = 0; i < seats_amount - props.limitation; i++) {
      seats.push({
        status: 'unavailable'
      });
    }

    for (var i = 0; i < props.limitation - seats_be_taken; i++) {
      seats.push({
        status: 'available_temp'
      });
    }
    return seats;
  }

  drawCirle = () => {
    const x = 250, y = 250, radius = 150;
    const gap = 40;
    const ratio = 2 * Math.PI / seats_amount;
    let svg = Snap();
    svg.attr('height', '500px');
    let div_element = document.getElementById('dinning-table');
    svg.appendTo(div_element)
    let circle = svg.circle(x, y, radius);
    circle.attr('fill', '#FFE082');
    svg.image('www/images/food.png', 150, 150, 200, 200).attr('preserveAspectRatio', 'xMidYMin meet');
    
    let seats = this.state.seats;
    seats.forEach((seat, index) => {
      let x_temp = x - (radius + gap) * Math.cos(ratio * index);
      let y_temp = y - (radius + gap) * Math.sin(ratio * index);
      let radius_temp = 15;
      let circle_temp;
      console.log(seat.status)
      switch (seat.status) {
        case 'taken':
          circle_temp =svg.circle(x_temp, y_temp, radius_temp).attr('fill', 'grey');
          break;
        case 'available_temp':
          circle_temp = svg.circle(x_temp, y_temp, radius_temp).attr('fill', '#FFE082');
          circle_temp.node.onclick = () => {
            seats[index].status = 'unavailable_temp';
            this.setSeatUnavailable(index);
          };
          break;
        case 'unavailable':
          circle_temp = svg.circle(x_temp, y_temp, radius_temp).attr('fill', 'grey');
          break;
        case 'unavailable_temp':
          circle_temp =svg.circle(x_temp, y_temp, radius_temp).attr('fill', 'red');
          circle_temp.node.onclick = () => {
            seats[index].status = 'available_temp';
            this.setSeatAvailable(index);
          };
          break;
      }
    });
  }

  setSeatUnavailable = (index) => {
    let seats = this.state.seats;
    seats[index].status = 'unavailable_temp';
    this.setState({
      seats: seats
    })
  }
  setSeatAvailable = (index) => {
    let seats = this.state.seats;
    seats[index].status = 'available_temp';
    this.setState({
      seats: seats
    })
  }
}

export default DinningTable;
