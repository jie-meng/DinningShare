import React from 'react';
import DinningTable from '../../DinningTable'
import Storage from '../../../utils/Storage';

import GuestForm from './GuestForm';
import classNames from 'classnames/bind';
import styles from './Guest.scss'
const cx = classNames.bind(styles);

class Guest extends React.Component {
  static PropTypes = {
    title: React.PropTypes.string
  }

  render(){
    // const title = this.props.title;
    const title = 'Great Dinner';
    const activities = Storage.getActivities();
    let activity = activities.filter((activity) => {
      return activity.title === title;
    })[0];
    const { guests, limitation, images, description, location, time } = activity;
    return (
      <div>
        <img style={{width: '100%'}} src={ images[0] } alt=""/>
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
      return activity.title === 'Great Dinner';
    });
    activities[index].guests.push(member);
    Storage.saveActivities();
  }
}

export default Guest;