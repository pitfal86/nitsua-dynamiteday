import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ImagePage = (props) => {
  return (
    <React.Fragment>
      <div>The Proposal</div>
      <div><img src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603762578/dynamitedayphotos/IMG_0153_Copy_okoddt.jpg" className='img-rounded img-responsive' /></div>
      <div><img src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603762631/dynamitedayphotos/IMG_0159_bn577i.jpg" className='img-rounded img-responsive' /></div>
      <div><img src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603762602/dynamitedayphotos/IMG_0158_wixna2.jpg" className='img-rounded img-responsive' /></div>
      <div><img src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603762666/dynamitedayphotos/IMG_0175_p3ihcy.jpg" className='img-rounded img-responsive' /></div>
    </ React.Fragment>

  );
}

export default ImagePage;