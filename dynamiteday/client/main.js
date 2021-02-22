// cloudinary injection
import '/imports/startup/client';
import '/imports/api/imagedata';
import '/imports/ui/layouts';
import '/imports/ui/pages';
import '/imports/ui/stylesheets/style.css';
import '/imports/ui/components/form-controls/';

// accordion injection
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ImageList from '/imports/ui/components/accordion/image_list';
import Axios from 'axios';

// counter
import DateCountdown from 'react-date-countdown-timer';

class App extends Component {
    // all classes that extend component need a constructor
    constructor(props) {
        // super will call the Component class and pass props
        // !!! PROPS IS HOW TO COMMUNICATE FROM PARENT TO CHILD OBJECT !!!
        super(props);

        // only set once per component. state is initialized and use setState to change. setting 'images' property
        this.state = { mainpage: [], allin: [] }
    }
    componentDidMount() {
        // axios is ajax library for http calls (async js)
        Axios.get('https://res.cloudinary.com/dz7kvpuzo/image/list/wedding.json').then(response => {
            Axios.get('https://res.cloudinary.com/dz7kvpuzo/image/list/allin.json').then(allinresponse => {
                // changing the state, this will rerender imageList and child imageDetails. waits for request to returne data
                this.setState({
                    // passing in object we want to update 'images' property with (array of data)
                    mainpage: response.data.resources,
                    allin: allinresponse.data.resources
                });
            });
        });
    }
    render() {
        // show new state after setState is called (render gets called again)

        // jsx for imageList containing imageDetails. pojo (plain old java object)
        // !!!! state being passes to imageList props !!!!
        return (
            <div style={{ backgroundColor: "#f7c783" }}>
                <img style={{ width: "100%", padding: "10px" }} src="https://res.cloudinary.com/dz7kvpuzo/image/upload/v1603820405/dynamitedayphotos/Header_ksmnyp.jpg" className='img-responsive center' />
                <div className='countdown'>
                    <DateCountdown dateTo='April 17, 2021 24:00:00 MST+00:00' mostSignificantFigure='day'  />
                </div>
                <ImageList mainpage={this.state.mainpage} allin={this.state.allin}/>
            </div>
        )
    }
}

// render the component to the screen
Meteor.startup(() => {
    ReactDom.render(<App />, document.querySelector('.container'));
})
