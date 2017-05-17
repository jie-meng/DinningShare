import React from 'react';
import styles from './HostPage.scss'
import Card from './Card/Card'

class HostPage extends React.Component {
    render(){
      return (
        <div>
            <h2>HostPage</h2>
            <Card />
        </div>
      )
    }
}

export default HostPage;