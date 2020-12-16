import React from 'react';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
  imageModal: {
    padding: '0.4rem',

    '& img': {
      maxWidth: '100%',
      height: 'auto',
      textAlign: 'center'
    },
  },
})

const ImagePage = (props) => {
  const classes = useStyles()

  return (
    <>
      <div className="grid-container-page">
        <div style={{ fontSize: "30px" }}>{"When:"}</div>
        <div className={classes.imageModal}>
            <br />
            <img className={classes.imageInModal} src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1608045533/dynamitedayphotos/savethedate_yryzoy.jpg"} />
        </div>
        <div style={{ fontSize: "30px" }}>{"Where:"}</div>
        <div className={classes.imageModal} style={{ padding: "20px" }}>
          <div>
            <a href="https://crookedwillowevents.com/" target="_blank">Crooked Willow Events
              <img className={classes.imageModal} src="https://crookedwillowevents.com/wp-content/uploads/2020/10/XanaduDaniel-Wedding-5-2-scaled.jpeg"></img>
            </a>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.427869222675!2d-104.9259952846404!3d39.21044717952371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876ca5cf7a2050d9%3A0xfec9d6cf2220db76!2sThe%20Venue%20at%20Crooked%20Willow%20Farms!5e0!3m2!1sen!2sus!4v1604933096307!5m2!1sen!2sus" style={{border : "0", width: "100%"}} allowFullScreen=""></iframe>
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>{"Bridesmaids"}</div>
        <div>{"Placeholder"}</div>
        <div>{"Placeholder"}</div>
        <div>{"Placeholder"}</div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>{"Groomsmen"}</div>
        <div>{"Placeholder"}</div>
        <div>{"Placeholder"}</div>
        <div>{"Placeholder"}</div>
      </div>
      <hr></hr>
    </>
  );
}

export default ImagePage;