import React from 'react';
import classNames from 'classnames/bind';
import styles from './DinningTable.scss'
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

// var Snap = require('snapsvg');
const cx = classNames.bind(styles);

class DinningTable extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.drawCirle();
    }

    render(){
        return (
            <div className={ cx('dinning-table') }>
            </div>
        )
    }

    drawCirle = () => {
        const x = 250, y = 250, radius = 150;
        const gap = 40;
        const number = 12;
        const ratio = 2 * Math.PI / number;
        let svg = Snap();
        svg.attr('height', '1000px')
        console.log(Snap());
        console.log(svg)
        let circle = svg.circle(x, y, radius);
        circle.attr('fill', '#FFE082');
        svg.image('./images/food.png', x, y, 50, 50)
        // circle.node.onclick = function () {
        //     circle.attr("fill", "red");
        // };
        // let dom = document.getElementsByClassName('dinning-table')[0];
        // console.log(dom)
        // dom.appendChild(circle);
        for (var i = 0; i < 12; i++) {
            let x_temp = x - (radius + gap) * Math.cos(ratio * i);
            let y_temp = y - (radius + gap) * Math.sin(ratio * i);
            let radius_temp = 15;
            svg.circle(x_temp, y_temp, radius_temp).attr('fill', '#FFE082');
        }



    }
}

export default DinningTable;
