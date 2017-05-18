import React from 'react';
import styles from './Guest.scss'
import DinningTable from '../../DinningTable'
import GuestForm from './GuestForm';

class Guest extends React.Component {
    render(){
      let guests = [{},{}];
      return (
        <div>
          <DinningTable guests={ guests } limitation={ 5 }/>
          <GuestForm/>

        </div>
      )
    }
}

export default Guest;