import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="animal-item">
                <h3>{this.props.title}</h3>
                <img className="rendered-animal" src={this.props.url} alt={this.props.title} />
                <p>Keyword: {this.props.keyword} </p>
                <p>{this.props.description}</p>
                <p>Horns: {this.props.horns} </p>
                {/* <p>Bonus: {this.props.images.bonus} </p> */}
            </div>
        )
    }
}
