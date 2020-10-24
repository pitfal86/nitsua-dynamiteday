// create image list component

// import react
import React from 'react';
import ImageScore from './image_score';

// build component
const ImageDetail = (props) => {
    console.log(props.image.context.custom);
    const url = 'http://res.cloudinary.com/dz7kvpuzo/image/upload/' + props.image.public_id;
    return (
        // shows title, description and upvots

        //                <p>
        //{props.image.ups}
        //{props.image.downs}
        //                </p>
        

        <li className="media list-group-item">
            <div className="media-left">
                <img src={url} />
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {props.image.context.custom.caption}
                </h4>
                <p>
                    {props.image.context.custom.alt}
                </p>
            </div>
        </li>
    );
};

// export component
export default ImageDetail;