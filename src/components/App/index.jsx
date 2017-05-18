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
                            iconClassNameRight="muidocs-icon-navigation-expand-more" style={{backgroundColor: '#FFA000'}}/>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;
