import React from 'react';
import styles from './Home.scss'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Card style={{boxShadow: '0 2px 4px rgba(0,0,0,.15)', width: '50%'}}>
                    <CardMedia overlay={<CardTitle title="My Kitchen" style={{padding: '0px',}} titleStyle={{fontSize: '18px',paddingLeft: '10px'}}/>}>
                        <img src="images/kitchen/kitchen0.jpg" style={{height: '210px',}}/>
                    </CardMedia>
                    <CardHeader avatar="images/avatar/cook6.png" style={{padding: '0px',float: 'right', width: '40px', margin: '2px 2px 0',}}/>
                    <CardTitle style={{padding: '4px', borderBottom: 'solid 0.2px #dce0e3',}} title="Dinner"
                               titleStyle={{fontSize: '17px'}}/>

                    <CardText>
                        Water, Water and Water
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default Home;