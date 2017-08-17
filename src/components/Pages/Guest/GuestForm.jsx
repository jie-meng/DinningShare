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

const formFields = ['Name', 'Age', 'Gender', 'Phone'];

class GuestForm extends React.Component {

  static PropTypes = {
    addMember: React.PropTypes.func,
    isSeatSelected: React.PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.state = {
      isFormFilled: false
    }
  }


  render(){
    const { isSeatSelected } = this.props;
    const {isFormFilled} = this.state;

    return (
      <div className={ cx('container') }>
        <div className={ cx('form') }>
          {
            formFields && formFields.map((field) => {
              if(field !== 'Gender') {
                return (
                  <TextField floatingLabelText={ field }
                             type={ field!== 'Name'? 'number':'text' }
                             floatingLabelStyle={{ color: amber700 }}
                             floatingLabelFocusStyle={ {color: amber700} }
                             underlineFocusStyle={{ borderColor: amber700 }}
                             onChange={ this.handleTextChange(field)}
                             style={{width: '100%'}}
                  />
                )
              } else {
                return (
                  <RadioButtonGroup name="gender" defaultSelected="not_light" onChange={this.handleTextChange(field)} style={{ marginTop: '30px'}}>
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
          <RaisedButton onClick={this.handleClick} disabled={ !(isSeatSelected && isFormFilled) } backgroundColor={ amber700 } buttonStyle={ { width: '100%', color: '#ffffff' } } style={{ width:'100%' }}>Join</RaisedButton>
        </div>
      </div>
    )

  }

  handleClick = () => {
    this.props.addMember && this.props.addMember(this.state);
  }

  checkForm = (field_on_change, newVal) => {
    let isFormFilled = true;
    formFields.forEach((field) => {
      if(this.state[field] == undefined || this.state[field] == '') {
        if(field_on_change !== field) {
          isFormFilled = false;
        }
      }
    });
    this.setState({
      isFormFilled: isFormFilled && newVal
    })
  }


  handleTextChange = (field, newVal) => {
    return (event, newVal) => {
      this.setState({
        [field]: newVal
      });
      this.checkForm(field, newVal);
    }
  }

}

export default GuestForm;