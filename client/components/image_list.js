// Create our image list component
// Import React
import React from 'react';
import ImageDetail from './image_detail';

//Dummy Data
const IMAGES = [
    { title: 'Pen', link : 'https://dummyimage.com/600x400'}, 
    { title: 'Pine Tree', link : 'https://dummyimage.com/600x400'},
    { title: 'Mug', link : 'https://dummyimage.com/600x400'}
]

//Create our component (JSX) - with function(){}
// const ImageList = () => {
//     const RenderedImages = IMAGES.map(function(image){
//         return <ImageDetail key={image.title} picture={image} />
//     });

//Create our component (JSX) - with Fat Arrow =>
const ImageList = () => {
    const RenderedImages = IMAGES.map(image=>
            //Implicit return - removed return keyword & removed curly braces as one line only
            <ImageDetail key={image.title} picture={image} />
    );

    return (
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    );
}

//Export our component
export default ImageList;