import React from 'react';
import { Link,hashHistory } from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class CardItem extends React.Component {
    render() {
        const { title, description,images,host } = this.props.activity;
        
        return (
            <Card style={{boxShadow: '0 2px 4px rgba(0,0,0,.15)', width: '48%', display:'inline-block', margin: '3px'}}
                  onClick={() => {hashHistory.push({pathname: '/guest',query: {title}}) }}>
                <CardMedia
                    overlay={<CardTitle title="My Kitchen" style={{padding: '0px',}} titleStyle={{fontSize: '18px',paddingLeft: '10px'}}/>}>
                    <img src={images[0]} style={{height: '210px',}}/>
                </CardMedia>
                <CardHeader avatar={host.avatar}
                            style={{padding: '0px',float: 'right', width: '40px', margin: '2px 2px 0',}}/>
                <CardTitle style={{padding: '4px', borderBottom: 'solid 0.2px #dce0e3',}} title={title}
                           titleStyle={{fontSize: '17px'}}/>
                <CardText>
                    {description}
                </CardText>
            </Card>
        )
    }
}

export default CardItem;