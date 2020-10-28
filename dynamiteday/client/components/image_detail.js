// create image list component

// import react
import React from 'react';
import ImagePage from './image_page';
import Accordion from 'react-bootstrap/Accordion';
import { Card } from "react-bootstrap";


// build component
const ImageDetail = (props) => {
    console.log(props.image.context.custom);
    const url = 'https://res.cloudinary.com/dz7kvpuzo/image/upload/' + props.image.public_id;

    const styleObj = {
        'fontWeight': 'bold',
        'fontSize' : '35px',
        'fontFamily' : 'fantasy'
        }

    return (
        // shows title, description and upvots

        //                <p>
        //{props.image.ups}
        //{props.image.downs}
        //                </p>
        <div>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <div className="grid-container">
                            <div style={styleObj}>{props.image.context.custom.caption}</div>
                            <div> <img src={url} className='img-rounded img-responsive' /></div>
                            <div>{props.image.context.custom.alt}</div>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                            <ImagePage caption={props.image.context.custom.caption} />
                    </Accordion.Collapse>
                </Card>
            </Accordion>




        </div>
    );
};

// export component
export default ImageDetail;