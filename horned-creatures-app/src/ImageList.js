import React, { Component } from 'react'
import ImageItem from './ImageItem'

export default class ImageList extends Component {
    render() {
        let filteredAnimals = this.props.images;
        return (
            <div className="whole-card">
                {filteredAnimals.map((animal, i) =>
                        <ImageItem key={i}
                            url={animal.url}
                            title={animal.title}
                            description={animal.description}
                            horns={animal.horns} 
                            keyword={animal.keyword}/>
                    )
                    
                }
            </div>
        )
    }
}
