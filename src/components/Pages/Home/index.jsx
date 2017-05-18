import React from 'react';
import styles from './Home.scss'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Card className={styles.cardContainer}>
                    <CardMedia overlay={<CardTitle title="My Kitchen" style={{padding: '0px',}} titleStyle={{fontSize: '18px',paddingLeft: '10px'}}/>}>
                        <img src="www/images/kitchen_chef1.jpg" style={{height: '210px',}}/>
                    </CardMedia>
                    <CardTitle style={{padding: '4px', borderBottom: '0.2px solid grey',}} title="Dinner"
                               titleStyle={{fontSize: '17px'}}/>
                    <CardHeader avatar="www/images/chef1.png" style={{padding: '0px'}}/>
                    <CardText>
                        Water, Water and Water
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default Home;