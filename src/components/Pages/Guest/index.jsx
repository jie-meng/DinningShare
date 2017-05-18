import React from 'react';
import DinningTable from '../../DinningTable'
import Storage from '../../../utils/Storage';
import { Link,hashHistory } from 'react-router'

import GuestForm from './GuestForm';
import classNames from 'classnames/bind';
import styles from './Guest.scss'
const cx = classNames.bind(styles);

class Guest extends React.Component {
  static PropTypes = {
    title: React.PropTypes.string
  }

  render(){
    console.log(this.props);
    const title = this.props.location.query.title;
    // const title = 'Great Dinner';
    const activities = Storage.getActivities();
    let activity = activities.filter((activity) => {
      return activity.title === title;
    })[0];
    const { guests, limitation, images, description, location, time } = activity;

    let image = images ? images[0] : 'images/food/pie.png';

    return (
      <div>
        <img style={{width: '100%'}} src={ image } alt=""/>
        <div className={ cx('dinner-info') }>
          <span>
            <img src="images/cutlery.svg" alt=""/>
            { description }
          </span>
          <span>
            <img src="images/location.svg" alt=""/>
            { location }
          </span>
          <span>
            <img src="images/date.svg" alt=""/>
            { time }
          </span>
        </div>
        <DinningTable guests={ guests } limitation={ limitation }/>
        <GuestForm addMember={ this.addMember }/>
      </div>
    )
  }

  addMember = (member) => {
    const activities = Storage.getActivities();
    let index = activities.findIndex((activity) => {
      return activity.title === this.props.location.query.title;
    });
    activities[index].guests.push(member);
    Storage.saveActivities();
    hashHistory.push({pathname: '/'});
  }
}

export default Guest;