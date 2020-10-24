// create image list component

// import react
import React from 'react';
import ImageDetail from './image_detail';


// variables
/* const IMAGES = [
    { title: 'All In!', link: 'https://dummyimage.com/600x400' },
    { title: 'Wedding Info', link: 'https://dummyimage.com/600x400' },
    { title: 'Wedding Party', link: 'https://dummyimage.com/600x400' }
] */

// build component
// props is being passes from parent object (main.js) and is state.images
const ImageList = (props) => {
    //const RenderedImages = IMAGES.map(image => {
    //const RenderedImages = props.images.map(image => {
        console.log(props);

    // filter creates a new array (validImages) that passes a test (in this case boolean true / false is_album)
    const validImages = props.images.filter(image => !image.is_album);


    const RenderedImages = validImages.map(image => {
        return <ImageDetail key={image.public_id} image={image} />
    });

    return (
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    );
};

// export component
export default ImageList;