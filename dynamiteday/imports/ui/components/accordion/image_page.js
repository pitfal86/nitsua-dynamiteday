import React from 'react';
import AllIn from './image_page_allin';
import SaveTheDate from './image_page_savethedate';

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
  // for style, the first set of brackets means variable referenced, second means it is object
  return (
    <span>{displayView(props)}</span>
  );
}

export default ImagePage;