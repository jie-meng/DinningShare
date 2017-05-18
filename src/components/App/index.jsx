import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import classNames from 'classnames/bind';
import styles from './App.scss';
import ModelGenerator from '../../utils/ModelGenerator';

const cx = classNames.bind(styles);

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Share Dining Table"
                            style={{backgroundColor: '#FFA000', marginBottom: '4px'}} titleStyle={{textAlign: 'center'}}/>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;
