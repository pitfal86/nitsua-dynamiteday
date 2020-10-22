// create image list component

// import react
import React from 'react';

// build component
const ImageDetail = (props) => {
    return (
        <li className="media list-group-item">
            <div className="media-left">
                <img src={props.image.link} />
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {props.image.title}
                </h4>
            </div>
        </li>
    );
};

// export component
export default ImageDetail;