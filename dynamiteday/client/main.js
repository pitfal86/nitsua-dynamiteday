// all js is ran automatically

// import the react lib
import React from 'react';
import ReactDom from 'react-dom';
import ImageList from './components/image_list'

// create a component
const App = () => {
    return (
        <div>
            <ImageList />
        </div>
    );
};

// render the component to the screen
Meteor.startup(() => {
    ReactDom.render(<App />, document.querySelector('.container'))
})
