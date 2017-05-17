import React from 'react';
import styles from './Home.scss'
import Card from './Card'

class Home extends React.Component {
    render(){
      return (
        <div>
            <h2>Home</h2>
            <Card />
        </div>
      )
    }
}

export default Home;