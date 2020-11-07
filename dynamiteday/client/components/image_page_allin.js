import React from 'react';

import SimpleModalLauncher from '../components/SimpleModalLaunche/SimpleModalLauncher';
import { createUseStyles } from 'react-jss';

function createAllInMap(arr) {
  const mapOfUniqueElements = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].context) {
      if (typeof mapOfUniqueElements.get(arr[i].context.custom.caption) === "undefined") {
        mapOfUniqueElements.set(arr[i].context.custom.caption, [arr[i]]);
      } else {
        mapOfUniqueElements.get(arr[i].context.custom.caption).push(arr[i]);
      }
    }
  }
  return mapOfUniqueElements;
}

const useStyles = createUseStyles({
  imageModal: {
    padding: '0.4rem',

    '& img': {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    },
  },
})

const ImagePage = (props) => {
  const classes = useStyles()
  const allInMap = createAllInMap(props.allin);
  const allInIterator = allInMap.keys();

  // Venue Two
  var venueTwoDate;
  var venueTwoCaption;
  var VenueTwo = allInMap.get(allInIterator.next().value).map(image => {
    const url = "https://res.cloudinary.com/dz7kvpuzo/image/upload/" + image.public_id;
    venueTwoDate = image.context.custom.alt;
    venueTwoCaption = image.context.custom.caption;
    return (
      <span key={image.public_id}>
        <SimpleModalLauncher imgURL={url}>
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src={url}
            />
          </div>
        </SimpleModalLauncher>
      </span>
    )
  });

  // Venue One
  var venueOneDate;
  var venueOneCaption;
  var VenueOne = allInMap.get(allInIterator.next().value).map(image => {
    const url = "https://res.cloudinary.com/dz7kvpuzo/image/upload/" + image.public_id;
    venueOneDate = image.context.custom.alt;
    venueOneCaption = image.context.custom.caption;
    return (
      <span key={image.public_id}>
        <SimpleModalLauncher imgURL={url}>
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src={url}
            />
          </div>
        </SimpleModalLauncher>
      </span>
    )
  });

  // Venue Four
  var venueFourDate;
  var venueFourCaption;
  var VenueFour = allInMap.get(allInIterator.next().value).map(image => {
    const url = "https://res.cloudinary.com/dz7kvpuzo/image/upload/" + image.public_id;
    venueFourDate = image.context.custom.alt;
    venueFourCaption = image.context.custom.caption;
    return (
      <span key={image.public_id}>
        <SimpleModalLauncher imgURL={url}>
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src={url}
            />
          </div>
        </SimpleModalLauncher>
      </span>
    )
  });

  // Venue Three
  var venueThreeDate;
  var venueThreeCaption;
  var VenueThree = allInMap.get(allInIterator.next().value).map(image => {
    const url = "https://res.cloudinary.com/dz7kvpuzo/image/upload/" + image.public_id;
    venueThreeDate = image.context.custom.alt;
    venueThreeCaption = image.context.custom.caption;
    return (
      <span key={image.public_id}>
        <SimpleModalLauncher imgURL={url}>
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src={url}
            />
          </div>
        </SimpleModalLauncher>
      </span>
    )
  });

  // The Engagement
  var engDate;
  var engCaption;
  var TheEng = allInMap.get(allInIterator.next().value).map(image => {
    const url = "https://res.cloudinary.com/dz7kvpuzo/image/upload/" + image.public_id;
    engDate = image.context.custom.alt;
    engCaption = image.context.custom.caption;
    return (
      <span key={image.public_id}>
        <SimpleModalLauncher imgURL={url}>
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src={url}
            />
          </div>
        </SimpleModalLauncher>
      </span>
    )
  });

  // The Proposal
  var propDate;
  var propCaption;
  var TheProposal = allInMap.get(allInIterator.next().value).map(image => {
    const url = "https://res.cloudinary.com/dz7kvpuzo/image/upload/" + image.public_id;
    propDate = image.context.custom.alt;
    propCaption = image.context.custom.caption;
    return (
      <span key={image.public_id}>
        <SimpleModalLauncher imgURL={url}>
          <div className={classes.imageModal}>
            <img
              className={classes.imageInModal}
              src={url}
            />
          </div>
        </SimpleModalLauncher>
      </span>
    )
  });

  return (
    <>
      <div className="grid-container-page">
        <div>{propCaption}<br />{propDate}</div>
        {TheProposal}
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>{engCaption}<br />{engDate}</div>
        {TheEng}
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>{venueOneCaption}<br />{venueOneDate}</div>
        {VenueOne}
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>{venueTwoCaption}<br />{venueTwoDate}</div>
        {VenueTwo}
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>{venueThreeCaption}<br />{venueThreeDate}</div>
        {VenueThree}
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>{venueFourCaption}<br />{venueFourDate}</div>
        {VenueFour}
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>Venue Picked
          <br />
          11-1-2020
          <br />
          <a href="https://crookedwillowevents.com/" target="_blank">Crooked Willow Events</a>
        </div>
        {VenueThree}
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>Catering Picked<br />-TODO-</div>
        <div>
          <a href="https://crookedwillowevents.com/wp-content/uploads/2019/04/Occasions_SampleEstimates_2019.pdf" target="_blank">Ocassions</a>
          <br />
          <a href="https://crookedwillowevents.com/wp-content/uploads/2019/04/Three-Tomatoes-Crooked-Willow-Sample-Menus-2019.pdf" target="_blank">Three Tomatoes</a>
          <br />
          <a href="https://crookedwillowevents.com/wp-content/uploads/2019/04/CBD-Proposal-for-Crooked-Willow-Farms.pdf" target="_blank">Catering By Design</a>
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>Invitations Picked<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Flowers Picked<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Cake Picked<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Music / DJ Picked<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Dress Picked<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Tuxes Picked<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Invitations Sent<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Wedding Rings Picked<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Final Head Count<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Bachelor Party<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Bachelorette Party<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Rehearsal<br />-TODO-</div>
      </div>
    </>
  );
}

export default ImagePage;