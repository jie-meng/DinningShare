import React from 'react';
import classNames from 'classnames/bind';
import styles from './App.scss'

const cx = classNames.bind(styles);

class App extends React.Component {
    render(){
      return (
        <div>
          {this.props.children}
        </div>
      )
    }
}

export default App;
