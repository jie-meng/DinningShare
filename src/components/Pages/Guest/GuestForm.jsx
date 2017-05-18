import React from 'react';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import classNames from 'classnames/bind';
import styles from './Guest.scss'
import { amber700 } from 'material-ui/styles/colors';
const cx = classNames.bind(styles);

const materialStyles = {
  radioButton: {
    marginBottom: 16,
  }
};

class GuestForm extends React.Component {

  static PropTypes = {
    addMember: React.PropTypes.func
  }

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
              if(field !== 'Gender') {
                return (
                  <TextField floatingLabelText={ field }
                             floatingLabelStyle={{ color: amber700 }}
                             floatingLabelFocusStyle={ {color: amber700} }
                             underlineFocusStyle={{ borderColor: amber700 }}
                             onChange={ this.handleTextChange(field)}
                             style={{width: '100%'}}
                  />
                )
              } else {
                return (
                  <RadioButtonGroup name="gender" defaultSelected="not_light" onChange={this.handleChange} style={{ marginTop: '30px'}}>
                    <RadioButton
                      value="male"
                      label="Male"
                      checkedIcon={<ActionFavorite style={{fill: amber700}} />}
                      uncheckedIcon={<ActionFavoriteBorder />}
                      style={materialStyles.radioButton}
                    />
                    <RadioButton
                      value="female"
                      label="Female"
                      checkedIcon={<ActionFavorite style={{fill: amber700}} />}
                      uncheckedIcon={<ActionFavoriteBorder />}
                    />
                  </RadioButtonGroup>
                )
              }

            })
          }
        </div>
        <div className={cx('button')}>
          <RaisedButton onClick={this.handleClick} backgroundColor={ amber700 } buttonStyle={ { width: '100%', color: '#ffffff' } }>Join</RaisedButton>
        </div>
      </div>
    )

  }

  handleClick = () => {
    this.props.addMember && this.props.addMember(this.state);
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