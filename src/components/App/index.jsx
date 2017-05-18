import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import classNames from 'classnames/bind';
import styles from './App.scss';
import ModelGenerator from '../../utils/ModelGenerator';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { hashHistory } from 'react-router'

const cx = classNames.bind(styles);

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Share Dining Table"
                            iconClassNameRight="muidocs-icon-navigation-expand-more" style={{backgroundColor: '#FFA000'}}/>
                    {this.props.children}
                    <FloatingActionButton style={{marginRight: '20px'}} onClick={() => {hashHistory.push({pathname: '/host'}) }}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;
