import React from 'react';

import SimpleModalLauncher from './SimpleModalLaunche/SimpleModalLauncher';
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
  return new Map([...mapOfUniqueElements.entries()].sort());
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

  // Bachelor Party
  var bachelorDate;
  var bachelorCaption;
  var BachelorParty = allInMap.get(allInIterator.next().value).map(image => {
    const url = "https://res.cloudinary.com/dz7kvpuzo/image/upload/" + image.public_id;
    bachelorDate = image.context.custom.alt;
    bachelorCaption = image.context.custom.caption;
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
    <div>
      <div className="grid-container-page">
        <div>{propCaption}<br />{propDate}</div>
        {TheProposal}
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
        <div>{engCaption}<br />{engDate}</div>
        {TheEng}
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
        <div>7. Venue Picked
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
          8. Dress picked
          <br />
          11-16-2020
          <br />
            <a href="https://www.davidsbridal.com/" target="_blank">David's Bridal</a>
        </div>
        <div>
          9. DJ picked
          <br />
          11-24-2020
          <br />
            <a href="https://myelitedj.com/" target="_blank">Elite DJ</a>
        </div>
        <div>
          10. Wedding Planner picked
          <br />
          12-1-2020
          <br />
            <a href="https://www.birchandhoneycollective.com/" target="_blank">Birch and Honey</a>
        </div>
        <div>
          11. Photographer Picked
          <br />
          12-2-2020
          <br />
            <a href="https://www.alldigitalphotoandvideo.com/" target="_blank">All Digital Photo and Video</a>
        </div>
        <div>
          12. Catering Picked
          <br />
          12-5-2020
          <br />
            <a href="https://www.occasionsdenver.com/menus-and-events/weddings/" target="_blank">Ocassions</a>
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>
          13. Save the date picked
          <br />
          12-7-2020
          <br />
            <a href="https://www.shutterfly.com/share-product/?shareid=e7749ce2-90a7-4229-8d42-d6f3c5d6582c&cid=SHARPRDWEBORDEM&esch=1" target="_blank">Shutterfly</a>
        </div>
        <div>
            <a href="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1611941753/dynamitedayphotos/savethedate_xfffzf.jpg" target="_blank"><img className="center" src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1611941753/dynamitedayphotos/savethedate_xfffzf.jpg"} /></a>
        </div>
        <div className={classes.imageModal}>
            <a href="https://cdn-image.staticsfly.com/i/tws/store/P254815SY_CAT_tws_hero_0402.jpg" target="_blank"><img className={classes.imageModal} src={"https://cdn-image.staticsfly.com/i/tws/store/P254815SY_CAT_tws_hero_0402.jpg"} /></a>
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>
          14. Tuxedos picked
          <br />
          1-16-2021
          <br />
            <a href="https://www.menswearhouse.com/" target="_blank">Mens Wearhouse</a>
        </div>
        <div>
            <a href="https://www.menswearhouse.com/" target="_blank"><img style={{ width: "70%" }} className="center" src={"https://image.menswearhouse.com/is/image/marketing/21-2396537-hp-sh-wedding-2x.jpg"} /></a>
        </div>
        <div className={classes.imageModal}>
            <a href="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1611987018/dynamitedayphotos/IMG_0329_m2hx5d.jpg" target="_blank"><img style={{ width: "40%" }} className="center" src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1611987018/dynamitedayphotos/IMG_0329_m2hx5d.jpg"} /></a>
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>
          15. Honeymoon Booked
          <br />
          1-25-2021
          <br />
            <a href="https://www.gohawaii.com/islands/maui" target="_blank">Hawaii - Maui</a>
        </div>
        <div>
            <a href="https://www.gohawaii.com/islands/maui" target="_blank"><img style={{ width: "70%" }} className="center" src={"https://www.gohawaii.com/sites/default/files/styles/wide_carousel_large/public/content-carousel-images/10105_mauiregionslp_VideoThumbnail.jpg?itok=vzKj-jK9"} /></a>
        </div>
        <div>
            <a href="https://www.google.com/maps/dir/ritz+carlton+maui/Hyatt+Regency+Maui+Resort+And+Spa,+Nohea+Kai+Drive,+Lahaina,+HI/Wailea+Beach+Resort+-+Marriott,+Maui,+Wailea+Alanui+Drive,+Wailea-Makena,+HI/H%C4%81na-Maui+Resort,+Hana+Highway,+Hana,+HI/@20.8439134,-156.6212288,10z/data=!3m1!4b1!4m26!4m25!1m5!1m1!1s0x7eaad5b7bcb45bf1:0x7c518822f6ca0041!2m2!1d-156.6541142!2d21.0010684!1m5!1m1!1s0x79552b6b82cf7fb7:0x8b4f6cc2ff2fcb8e!2m2!1d-156.6921667!2d20.912971!1m5!1m1!1s0x7954dada4b61da4d:0xe73f5d288a7aae5b!2m2!1d-156.4428011!2d20.6878874!1m5!1m1!1s0x7954ac25effd1793:0xf451e46d890dd906!2m2!1d-155.9872211!2d20.754252!3e0" target="_blank"><img  style={{ width: "80%" }} className="center" src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1611986922/dynamitedayphotos/Screen_Shot_2021-01-25_at_1.07.59_PM_kpqktb.png"} /></a>
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>
          16. Invitations Picked
          <br />
          2-5-2021
          <br />
          <a href="https://www.shutterfly.com/cards-stationery/wedding-invitations/barn-door-wedding-invitation?_br_psugg_q=gate+fold+card?intpr=sitesearch_recommended" target="_blank">Shutterfly</a>
        </div>
        <div className={classes.imageModal}>
            <a href="https://c3.staticsfly.com/asset/fetch/cs/GATEFOLD-591813-27482-MERCHLARGE_FRONT/thumbnail.preview/v1" target="_blank"><img style={{ width: "70%" }} className="center" src={"https://c3.staticsfly.com/asset/fetch/cs/GATEFOLD-591813-27482-MERCHLARGE_FRONT/thumbnail.preview/v1"} /></a>
        </div>
        <div className={classes.imageModal}>
            <a href="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1614031155/dynamitedayphotos/geiqnwqklsc3qkvy50az.jpg" target="_blank"><img style={{ width: "70%" }} className="center" src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1614031155/dynamitedayphotos/geiqnwqklsc3qkvy50az.jpg"} /></a>
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>
          17. Under Contract
          <br />
          2-15-2021
          <br />
          <a href="https://www.google.com/maps/place/23031+Hope+Dale+Ave,+Parker,+CO+80138/@39.5009152,-104.7235446,17z/data=!3m1!4b1!4m5!3m4!1s0x876c92459361623d:0xa974ede15b03ddf0!8m2!3d39.5009152!4d-104.7213559" target="_blank">23031 Hope Dale Ave, Parker, CO 80138</a>
        </div>
        <div className={classes.imageModal}>
            <a href="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1614036829/dynamitedayphotos/j1ctc92t3ilhqmlqxcow.jpg" target="_blank"><img style={{ width: "70%" }} className="center" src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1614036829/dynamitedayphotos/j1ctc92t3ilhqmlqxcow.jpg"} /></a>
        </div>
        <div className={classes.imageModal}>
            <a href="https://www.google.com/maps/place/23031+Hope+Dale+Ave,+Parker,+CO+80138/@39.5009152,-104.7235446,17z/data=!3m1!4b1!4m5!3m4!1s0x876c92459361623d:0xa974ede15b03ddf0!8m2!3d39.5009152!4d-104.7213559" target="_blank"><img style={{ width: "100%" }} className="center" src={"https://res.cloudinary.com/dz7kvpuzo/image/upload/v1614036776/dynamitedayphotos/Screen_Shot_2021-02-22_at_4.30.05_PM_ezmgut.png"} /></a>
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>
          18. Invitations Sent
          <br />
          2-17-2021
        </div>
        <div>
          19. Flowers picked
          <br />
          2-19-2021
        </div>
        <div>
          20. Wedding Rings Picked
          <br />
          3-6-2021
        </div>
      </div>
      <hr></hr>

      <div>
        <div className="grid-container-page">
            <div>{bachelorCaption}<br />{bachelorDate}</div>
            {BachelorParty}
        </div>
      </div>
      <hr></hr>

      <div className="grid-container-page">
        <div>Cake Picked<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Decorations done<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Final Head Count<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Bachelorette Party<br />-TODO-</div>
      </div>
      <div className="grid-container-page">
        <div>Rehearsal<br />-TODO-</div>
      </div>
    </div>
  );
}

export default ImagePage;