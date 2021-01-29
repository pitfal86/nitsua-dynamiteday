import React from 'react';
import ImageDetail from '/imports/ui/components/accordion/image_detail';

// build component
// props is being passes from parent object (main.js) and is state.images
const ImageList = (props) => {
    // filter creates a new array (validImages) that passes a test (in this case boolean true / false is_album)
    const RenderedImages = props.mainpage.map(image => {
        return <ImageDetail key={image.public_id} mainpage={image} allin={props.allin}/>
    });

    return (
        <div>{RenderedImages}</div>
    );
};

// export component
export default ImageList;