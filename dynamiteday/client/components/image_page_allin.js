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
        <div>
          Dress picked
          <br />
          11-16-2020
          <br />
            <a href="https://www.davidsbridal.com/" target="_blank">David's Bridal</a>
        </div>
        <div className={classes.imageModal}>
            <img className="center" src={"https://www.davidsbridal.com/wcsstore/images/wwcm/categorylandingpages/brides/2020/Brides_CLP_Hero_Update_TABLET.jpg"} />
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>
          DJ picked
          <br />
          11-24-2020
          <br />
            <a href="https://myelitedj.com/" target="_blank">Elite DJ</a>
        </div>
        <div className={classes.imageModal}>
            <img className="center" src={"https://myelitedj.com/wp-content/uploads/2020/05/Main-Page-1.jpeg"} />
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>
          Wedding Planner picked
          <br />
          12-1-2020
          <br />
            <a href="https://www.birchandhoneycollective.com/" target="_blank">Birch and Honey</a>
        </div>
        <div className={classes.imageModal}>
            <img className="center" src={"https://static.wixstatic.com/media/c5a9fb_015b391143164be8a2bd67b781864d69~mv2.jpeg"} />
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>
          Photographer Picked
          <br />
          12-2-2020
          <br />
            <a href="https://www.alldigitalphotoandvideo.com/" target="_blank">All Digital Photo and Video</a>
        </div>
        <div className={classes.imageModal}>
            <img className="center" src={"https://www.alldigitalphotoandvideo.com/wp-content/uploads/2020/05/ADS-Staff-2019-001.png"} />
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>
          Catering Picked
          <br />
          12-5-2020
          <br />
            <a href="https://www.occasionsdenver.com/menus-and-events/weddings/" target="_blank">Ocassions</a>
        </div>
        <div className={classes.imageModal}>
            <img className={classes.imageModal} src={"https://www.occasionsdenver.com/wp-content/uploads/2019/12/REDD4731-copy.jpg"} />
        </div>
        <div className={classes.imageModal}>
            <img className={classes.imageModal} src={"https://www.occasionsdenver.com/wp-content/uploads/2019/12/SaraConnor-541-of-855-copy-e1576013462247-450x400.jpg"} />
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>
          Save the date picked
          <br />
          12-7-2020
          <br />
            <a href="https://www.shutterfly.com/share-product/?shareid=e7749ce2-90a7-4229-8d42-d6f3c5d6582c&cid=SHARPRDWEBORDEM&esch=1" target="_blank">Shutterfly</a>
        </div>
        <div>
            <img className="center" src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1608045533/dynamitedayphotos/savethedate_yryzoy.jpg"} />
        </div>
        <div className={classes.imageModal}>
            <img className={classes.imageModal} src={"https://cdn-image.staticsfly.com/i/tws/store/P254815SY_CAT_tws_hero_0402.jpg"} />
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