import React from 'react';
import classNames from 'classnames/bind';
import styles from './app.scss'

const cx = classNames.bind(styles);

class App extends React.Component {
    render(){
      return (
          <h2>Hello!</h2>
      )
    }
}

export default App;
