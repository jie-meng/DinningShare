import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import classNames from 'classnames/bind';
import styles from './App.scss'

const cx = classNames.bind(styles);

class App extends React.Component {
    render(){
      return (
        <MuiThemeProvider>
          {this.props.children}
        </MuiThemeProvider>
      )
    }
}

export default App;
