import React from 'react';
import classNames from 'classnames/bind';
import styles from './app.scss'
import DinningTable from '../DinningTable';

const cx = classNames.bind(styles);

class App extends React.Component {
    render(){

        return (
            <div>
                <h2>Hello!</h2>
                <DinningTable/>
            </div>
        )
    }
}

export default App;
