import React from 'react';
import ImageShow from './ImageShow';

const ImageList = ({ images }) => { images.map(image => <ImageShow image={image} key={image.id} />) }

export default ImageList;
