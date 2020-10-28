// all js is ran automatically

// import the react lib
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ImageList from './components/image_list';
import Axios from 'axios';


import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
// create a component
/* const App = () => {
    return (
        <div>
            <ImageList />
        </div>
    );
}; */
class App extends Component {
    // all classes that extend component need a constructor
    constructor(props) {
        // super will call the Component class and pass props
        // !!! PROPS IS HOW TO COMMUNICATE FROM PARENT TO CHILD OBJECT !!!
        super(props);

        // only set once per component. state is initialized and use setState to change. setting 'images' property
        this.state = { images: [] }
    }


    componentDidMount() {
        console.log('App is about to render and load data');

        // axios is ajax library for http calls (async js)
        Axios.get('https://res.cloudinary.com/dz7kvpuzo/image/list/wedding.json').then(response => {
            console.log(response);
            // changing the state, this will rerender imageList and child imageDetails. waits for request to returne data
            this.setState({
                // passing in object we want to update 'images' property with (array of data)
                images: response.data.resources
            });
        });
    }
    render() {
        // show new state after setState is called (render gets called again)

        // jsx for imageList containing imageDetails. pojo (plain old java object)
        // !!!! state being passes to imageList props !!!!
        console.log(this.state.images);
        return (
            <div style={{ backgroundColor: "#f2ac4c" }}>
                <img style={{ width: "100%", padding: "10px"}} src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603820405/dynamitedayphotos/Header_ksmnyp.jpg" className='img-responsive center' />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

// render the component to the screen
Meteor.startup(() => {
    ReactDom.render(<App />, document.querySelector('.container'));
})
