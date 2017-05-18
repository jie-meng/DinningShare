import React from 'react';
import DinningTable from '../../DinningTable'
import Storage from '../../../utils/Storage';

import GuestForm from './GuestForm';

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
    const { guests, limitation } = activity;
    return (
      <div>
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

    // console.log(Storage.getActivities())
  }
}

export default Guest;