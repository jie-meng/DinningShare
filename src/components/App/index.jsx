import React from 'react';
import util from 'util';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import classNames from 'classnames/bind';
import styles from './App.scss';
import Storage from '../../utils/Storage';
import ModelGenerator from '../../utils/ModelGenerator';

const cx = classNames.bind(styles);

class App extends React.Component {
    render() {
        const activity = Storage.getActivities()[0];

        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Share Dining Table"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;
