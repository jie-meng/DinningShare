import React from 'react';
import styles from './Home.scss'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { amber700 } from "material-ui/styles/colors"
import { hashHistory } from 'react-router'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Storage from '../../../utils/Storage';
import CardItem from './CardItem';

class Home extends React.Component {
    render() {
        let cardItems = [];
        const activities = Storage.getActivities();

        for (var i = 0; i < activities.length; i++) {
            cardItems.push(<CardItem activity={activities[i]}> </CardItem>);
        }

        return (
            <div>
                {cardItems}
                <FloatingActionButton style={{position: 'fixed', bottom: '20px', right: '20px'}} iconStyle={{backgroundColor: amber700, height: '60px', width: '60px'}} onClick={() => {hashHistory.push({pathname: '/host'}) }}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}

export default Home;