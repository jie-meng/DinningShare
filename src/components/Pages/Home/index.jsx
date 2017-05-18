import React from 'react';
import AppBar from 'material-ui/AppBar';
import styles from './Home.scss'
import Card from './Card'

class Home extends React.Component {
    render(){
      return (
        <div>
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <Card />
        </div>
      )
    }
}

export default Home;