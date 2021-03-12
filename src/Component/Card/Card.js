import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        let {image, title, desc} = this.props.card1;
        return (
            <div className="Bg">
                <div className="Card">
                    <div style={{backgroundImage: `url(${image})`}} className="Image"></div>
                    <br/>
                    <h2>{title}</h2>
                    <br/>
                    <p>{desc}</p>
                    <br/>
                    <button>Explore</button>
                </div>
            </div>
        )
    }
}

export default Card;