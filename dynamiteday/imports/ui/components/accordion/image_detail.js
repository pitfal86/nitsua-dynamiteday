import React from 'react';
import ImagePage from '/imports/ui/components/accordion/image_page';
import Accordion from 'react-bootstrap/Accordion';
import { Card } from "react-bootstrap";

// build component
const ImageDetail = (props) => {
    const url = 'https://res.cloudinary.com/dz7kvpuzo/image/upload/' + props.mainpage.public_id;

    const styleObj = {
        'fontWeight': 'bold',
        'fontSize': '35px',
        'fontFamily': 'fantasy'
    };

    return (
        <div>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <div className="grid-container">
                            <div style={styleObj}>{props.mainpage.context.custom.caption}</div>
                            <div> <img src={url} className='img-rounded img-responsive' /></div>
                            <div>{props.mainpage.context.custom.alt}</div>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <ImagePage caption={props.mainpage.context.custom.caption} allin={props.allin}/>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

// export component
export default ImageDetail;