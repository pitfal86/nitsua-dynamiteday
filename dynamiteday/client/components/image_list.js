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

    // filter creates a new array (validImages) that passes a test (in this case boolean true / false is_album)
    //const validImages = props.mainpage.filter(image => !image.is_album);p=
    const RenderedImages = props.mainpage.map(image => {
        return <ImageDetail key={image.public_id} mainpage={image} allin={props.allin}/>
    });

    return (
        <div>{RenderedImages}</div>
    );
};

// export component
export default ImageList;