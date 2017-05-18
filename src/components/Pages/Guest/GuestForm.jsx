import React from 'react';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import classNames from 'classnames/bind';
import styles from './Guest.scss'
import { amber700 } from 'material-ui/styles/colors';
const cx = classNames.bind(styles);

class GuestForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const formFields = ['Name', 'Age', 'Gender', 'Phone'];

    return (
      <div className={ cx('container') }>
        <div className={ cx('form') }>
          {
            formFields && formFields.map((field) => {
              return (
                <TextField floatingLabelText={ field }
                           floatingLabelStyle={{ color: amber700 }}
                           floatingLabelFocusStyle={ {color: amber700} }
                           underlineFocusStyle={{ borderColor: amber700 }}
                           onChange={ this.handleTextChange(field)}
                           style={{width: '100%'}}
                />
              )
            })
          }
        </div>
        <div className={cx('button')}>
          <RaisedButton onClick={this.handleClick} backgroundColor={ amber700 } buttonStyle={ { display: 'block', width: '100px', color: '#ffffff' } }>Join</RaisedButton>
        </div>
      </div>
    )

  }

  handleClick = () => {
    console.log(this.state);
  }


  handleTextChange = (field) => {
    return (event, newVal) => {
      this.setState({
        [field]: newVal
      })
    }
  }

}

export default GuestForm;