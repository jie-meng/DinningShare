import React from 'react';
import styles from './Guest.scss'
import DinningTable from '../../DinningTable'

class Guest extends React.Component {

  constructor(props) {
    super(props);
  }

    render(){
      let guests = [];
      return (
        <div>
          <DinningTable guests={ guests } limitation={ 5 }/>
        </div>
      )
    }
}

export default Guest;