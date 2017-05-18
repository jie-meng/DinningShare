import React from "react"
import moment from 'moment'
import scss from "./Host.scss"
import { hashHistory } from 'react-router'
import modalGenerator from '../../../utils/ModelGenerator'
import DataStorage from '../../../utils/Storage'
import classNames from "classnames/bind"
import TextField from "material-ui/TextField"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import DatePicker from "material-ui/DatePicker"
import TimePicker from "material-ui/TimePicker"
import RaisedButton from "material-ui/RaisedButton"
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {amber700, red500, white} from "material-ui/styles/colors"
import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin();

const style = classNames.bind(scss);

const materialStyles = {
    errorStyle: {
        color: red500,
    },
    underlineStyle: {
        borderColor: amber700,
    },
    floatingLabelStyle: {
        color: amber700,
    },
    floatingLabelFocusStyle: {
        color: amber700,
    },
    submitButton: {
        width: 256
    },
    radioButton: {
        marginTop: 20,
        marginBottom: 16,
    }
};

const guestItems = [];
for (let i = 1; i < 8; i++) {
    guestItems.push(<MenuItem value={i} key={i} primaryText={`${i}`}/>);
}

class Host extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            guests: null,
            title: '',
            costs: '',
            location: '',
            description: '',
            date: null,
            time: null,
            name: '',
            tel: '',
            gender: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    };

    handleGuestChange = (event, index, guests) => {
        this.setState({guests})
    };

    handleDateChange = (event, date) => {
        this.setState({date})
    }

    handleTimeChange = (event, time) => {
        this.setState({time})
    }

    handleSubmit = () => {
        if(!this.validateData()){
            return false
        }
        const host = modalGenerator.generateMember(
            this.state.name,
            this.state.gender,
            this.state.tel
        )
        const activity = modalGenerator.generateActivity(
            this.state.title,
            host,
            this.state.description,
            null,
            this.state.guests,
            this.state.location,
            moment(this.state.date).format('YYYY MMM Do'),
            moment(this.state.time).format('HH:mm'),
            []
        )
        DataStorage.addActivity(activity)
        hashHistory.push('/')
    }

    validateData = () => {
        return true
    }

    render() {
        return (
            <div className={style('container')}>
                <div className={style('fields')}>
                    <TextField
                        hintText="Give this activity a good name"
                        floatingLabelText="Title"
                        floatingLabelStyle={materialStyles.floatingLabelStyle}
                        floatingLabelFocusStyle={materialStyles.floatingLabelFocusStyle}
                        underlineFocusStyle={materialStyles.underlineStyle}
                        name="title"
                        onChange={this.handleChange}
                    />
                    <TextField
                        multiLine={true}
                        hintText="Maybe what you gonna cook"
                        floatingLabelText="Description"
                        floatingLabelStyle={materialStyles.floatingLabelStyle}
                        floatingLabelFocusStyle={materialStyles.floatingLabelFocusStyle}
                        underlineFocusStyle={materialStyles.underlineStyle}
                        name="description"
                        onChange={this.handleChange}
                    />
                    <DatePicker
                        hintText="Set date for activity"
                        floatingLabelText="Date"
                        floatingLabelStyle={materialStyles.floatingLabelStyle}
                        onChange={this.handleDateChange}
                    />
                    <TimePicker
                        hintText="Set time for activity"
                        autoOk={true}
                        floatingLabelText="Time"
                        floatingLabelStyle={materialStyles.floatingLabelStyle}
                        onChange={this.handleTimeChange}
                    />
                    <TextField
                        hintText="Where is your dinning table"
                        floatingLabelText="Location"
                        floatingLabelStyle={materialStyles.floatingLabelStyle}
                        floatingLabelFocusStyle={materialStyles.floatingLabelFocusStyle}
                        underlineFocusStyle={materialStyles.underlineStyle}
                        name="location"
                        onChange={this.handleChange}
                    />
                    <SelectField
                        hintText="How many guests at most"
                        floatingLabelText="Number of Guests"
                        floatingLabelStyle={materialStyles.floatingLabelStyle}
                        underlineFocusStyle={materialStyles.underlineStyle}
                        floatingLabelFixed={false}
                        maxHeight={120}
                        name="guests"
                        value={this.state.guests}
                        onChange={this.handleGuestChange}
                    >
                        {guestItems}
                    </SelectField>
                    <TextField
                        hintText="Will be paid equally by each guest"
                        floatingLabelText="Costs"
                        type="number"
                        floatingLabelStyle={materialStyles.floatingLabelStyle}
                        floatingLabelFocusStyle={materialStyles.floatingLabelFocusStyle}
                        underlineFocusStyle={materialStyles.underlineStyle}
                        name="costs"
                        onChange={this.handleChange}
                    />
                    <TextField
                        hintText="Please leave your name"
                        floatingLabelText="Your Name"
                        floatingLabelStyle={materialStyles.floatingLabelStyle}
                        floatingLabelFocusStyle={materialStyles.floatingLabelFocusStyle}
                        underlineFocusStyle={materialStyles.underlineStyle}
                        name="name"
                        onChange={this.handleChange}
                    />
                    <RadioButtonGroup
                        name="gender"
                        defaultSelected="not_light"
                        onChange={this.handleChange}
                    >
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
                    <TextField
                        hintText="Please leave your phone number"
                        floatingLabelText="Phone Number"
                        type="number"
                        floatingLabelStyle={materialStyles.floatingLabelStyle}
                        floatingLabelFocusStyle={materialStyles.floatingLabelFocusStyle}
                        underlineFocusStyle={materialStyles.underlineStyle}
                        name="tel"
                        onChange={this.handleChange}
                    />
                </div>
                <div className={style('submitButton')}>
                    <RaisedButton
                        label="Submit"
                        backgroundColor={amber700}
                        labelColor={white}
                        onClick={this.handleSubmit}
                        style={materialStyles.submitButton}/>
                </div>
            </div>
        )
    }
}

export default Host;