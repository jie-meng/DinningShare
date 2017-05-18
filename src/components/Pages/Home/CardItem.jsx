import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class CardItem extends React.Component {
    render() {
        const { cardTitle } = this.props;

        return (
            <Card style={{boxShadow: '0 2px 4px rgba(0,0,0,.15)', width: '48%', display:'inline-block', margin: '3px'}}>
                <CardMedia overlay={<CardTitle title="My Kitchen" style={{padding: '0px',}} titleStyle={{fontSize: '18px',paddingLeft: '10px'}}/>}>
                    <img src="www/images/kitchen_chef1.jpg" style={{height: '210px',}}/>
                </CardMedia>
                <CardHeader avatar="www/images/chef1.png" style={{padding: '0px',float: 'right', width: '40px', margin: '2px 2px 0',}}/>
                <CardTitle style={{padding: '4px', borderBottom: 'solid 0.2px #dce0e3',}} title={cardTitle}
                           titleStyle={{fontSize: '17px'}}/>
                <CardText>
                    Water, Water and Water
                </CardText>
            </Card>
        )
    }
}

export default CardItem;