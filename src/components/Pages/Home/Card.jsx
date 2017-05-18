import React from 'react';
import styles from './Card.scss'
import { hashHistory } from 'react-router';


class Card extends React.Component {
    onClick(){
        hashHistory.push('/host')
    }

    render(){
      return (
          <h2 onClick={this.onClick}>Card</h2>
      )
    }
}

export default Card;