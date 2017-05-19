import React from 'react';
import classNames from 'classnames/bind';
import styles from './DinningTable.scss'
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

const cx = classNames.bind(styles);
const seats_amount = 12;

class DinningTable extends React.Component {

  static PropTypes = {
    limitation: React.PropTypes.number,
    guests: React.PropTypes.Array,
    setIsSeatSelected: React.PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      seats: this.initialState(props),
    }
  }

  componentDidMount () {
    this.drawCirle();
  }

  componentDidUpdate() {
    document.getElementById('table').remove();
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
    const x = 225, y = 290, radius = 150;
    const gap = 50;
    const ratio = 2 * Math.PI / seats_amount;
    let svg = Snap();
    svg.attr('height', '550px').attr('width', '450px').attr('id', 'table');
    let div_element = document.getElementById('dinning-table');
    svg.appendTo(div_element)
    let circle = svg.circle(x, y, radius);
    circle.attr('fill', '#FFE082');
    svg.image('images/food.png', x-100, y-100, 200, 200).attr('preserveAspectRatio', 'xMidYMin meet');

    let seats = this.state.seats;
    seats.forEach((seat, index) => {
      let x_temp = x - (radius + gap) * Math.cos(ratio * index);
      let y_temp = y - (radius + gap) * Math.sin(ratio * index);
      let seat_temp;

      let sitting_image_not_avalaible = `images/sitting-silhouette_not_available_${this.rightOrLeft(index)}.svg`;
      let sitting_image = `images/sitting-silhouette_${this.rightOrLeft(index)}.svg`;

      switch (seat.status) {
        case 'taken':
          seat_temp = svg.image('images/seat_not_available.svg', x_temp-25, y_temp-25, 50, 50).attr('preserveAspectRatio', 'xMidYMin meet');
          svg.image(sitting_image_not_avalaible, x_temp-38, y_temp-78, 80, 80).attr('preserveAspectRatio', 'xMidYMin meet');
          break;
        case 'available_temp':
          seat_temp = svg.image('images/seat.svg', x_temp-25, y_temp-25, 50, 50).attr('preserveAspectRatio', 'xMidYMin meet');
          seat_temp.node.onclick = () => {
            this.setSeatUnavailable(index);
          };
          break;
        case 'unavailable':
          seat_temp = svg.image('images/seat_not_available.svg', x_temp-25, y_temp-25, 50, 50).attr('preserveAspectRatio', 'xMidYMin meet');
          break;
        case 'unavailable_temp':
          seat_temp = svg.image('images/seat.svg', x_temp-25, y_temp-25, 50, 50).attr('preserveAspectRatio', 'xMidYMin meet');
          svg.image(sitting_image, x_temp-38, y_temp-78, 80, 80).attr('preserveAspectRatio', 'xMidYMin meet');
          seat_temp.node.onclick = () => {
            this.setSeatAvailable(index);
          };
          break;
      }
    });
  }

  rightOrLeft = (index) => {
    if(index < seats_amount * 0.25 || index > seats_amount * 0.75 ) {
      return 'left'
    }
    return 'right';
  }

  setSeatUnavailable = (index) => {
    let seats = JSON.parse(JSON.stringify(this.state.seats));
    let index_temp = seats.findIndex((seat) => {
      return seat.status === 'unavailable_temp';
    });
    if(index_temp > -1) {
      seats[index_temp].status = 'available_temp';
    }
    seats[index].status = 'unavailable_temp';
    this.setState({
      seats: seats
    })
    this.props.setIsSeatSelected && this.props.setIsSeatSelected(true);
  }
  setSeatAvailable = (index) => {
    let seats = this.state.seats;
    seats[index].status = 'available_temp';
    this.setState({
      seats: seats,
    });
    this.props.setIsSeatSelected && this.props.setIsSeatSelected(false);

  }
}

export default DinningTable;
