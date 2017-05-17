import React from 'react';
import HostPage from '../Pages/HostPage/HostPage';
import classNames from 'classnames/bind';
import styles from './App.scss'

const cx = classNames.bind(styles);

class App extends React.Component {
    render(){
      return (
          <div>
            <h2>Hello!</h2>
            <HostPage />
        </div>
      )
    }
}

export default App;
