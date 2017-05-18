import React from 'react';
import classNames from 'classnames/bind';
import styles from './app.scss'
import DinningTable from '../DinningTable';

const cx = classNames.bind(styles);

class App extends React.Component {
    render(){
      let guests = []
      return (
        <div>
          {this.props.children}
            <DinningTable guests={ guests } limitation={ 5 }/>
        </div>
      )
    }
}

export default App;
