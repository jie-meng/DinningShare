import React from 'react';
import styles from './Home.scss'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Storage from '../../../utils/Storage';
import CardItem from './CardItem';

class Home extends React.Component {
    render() {
        let cardItems = [];
        const activities = Storage.getActivities();

        for (var i = 0; i < activities.length; i++) {
            cardItems.push(<CardItem cardTitle={activities[i].title}> </CardItem>);
        }
        const activity = Storage.getActivities()[0];

        return (
            <div>
                {cardItems}
            </div>
        )
    }
}

export default Home;