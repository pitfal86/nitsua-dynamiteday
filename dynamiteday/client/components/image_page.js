import React from 'react';
import AllIn from './image_page_allin';
import SaveTheDate from './image_page_savethedate';

// props.ups and props.downs from image_detail.js

function displayView(totalprops) {
  switch (totalprops.caption) {
    case 'All in':
      return (
        <AllIn allin={totalprops.allin} />
      );
    case 'Save the Date':
      return (
        <SaveTheDate savethedate={totalprops} />
      );
    default:
      return 'Coming Soon...';
  }
}

const ImagePage = (props) => {
  // ES6 destructuring to pull in properties from props
  //const { ups, downs } = props;

  // above is same as this
  //const ups = props.ups;
  //const downs = props.downs;


  // calcculate percent. `` is a backtick, this uses a template string ES6
  /* const upsPercent = `${100 * (ups / (ups + downs))}%`;
  const downsPercent = `${100 * (downs / (ups + downs))}%`;
  <div>
  Ups / downs
  <div className='progress'>
      <div style={{width : upsPercent}} className='progress-bar progress-bar-success progress-bar-striped' />
      <div style={{width : downsPercent}} className='progress-bar progress-bar-danger progress-bar-striped' />
  </div>
  </div> */



  // for style, the first set of brackets means variable referenced, second means it is object
  return (
    <span>{displayView(props)}</span>
  );
}

export default ImagePage;