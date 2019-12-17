import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
    // const images = props.images.map(image => {
    //     return <img key={image.id} alt={image.description} src={image.urls.regular}></img>
    // })

    // refactor - images used 3 times so we can change parameters like this:
    // const images = props.images.map(({id, description, urls}) => {
    //     return <img key={id} alt={description} src={urls.regular}></img>
    // })

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });
    return <div className="image-list">{images}</div>
}

export default ImageList