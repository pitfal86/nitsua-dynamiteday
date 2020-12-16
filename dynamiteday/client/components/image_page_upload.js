import React from 'react';
import { createUseStyles } from 'react-jss';


import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

/* global cloudinary */

Template.Cloudinary_Upload_Widget.events({
  'click #cloudinary-upload-widget': function click(event) {
    event.preventDefault();
    cloudinary.openUploadWidget(
      {
        cloud_name: 'dz7kvpuzo',
        upload_preset: 'tfs6btfn',
        sources: ['local', 'url', 'camera'],
        cropping: 'server',
        cropping_aspect_ratio: 1,
        max_file_size: '500000',
        max_image_width: '500',
        max_image_height: '500',
        min_image_width: '300',
        min_image_height: '300',
      },
      (error, result) => {
        if (error) {
          console.log('Error during Cloudinary upload: ', error);
          return;
        }
        // Otherwise get the form elements
        console.log('Cloudinary results: ', result);
        const fileName = result[0].original_filename;
        const thumbnail = result[0].thumbnail_url;
        const url = result[0].url;
        $("input[name='cloudinaryFileName']").val(fileName);
        $("input[name='cloudinaryUrl']").val(url);
        $("input[name='cloudinaryThumbnail']").val(thumbnail);
      });
  },
});


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
      <template name="Cloudinary_Upload_Widget">
        <div class="{{#if required}}required{{/if}} field">
          <div class="fields">
            <div class="twelve wide field">
              <input type="text" name="cloudinaryFileName" placeholder="Please upload image"></input>
              <input type="hidden" name="cloudinaryUrl" disabled="true"></input>
              <input type="hidden" name="cloudinaryThumbnail" disabled="true"></input>
            </div>
            <div class="four wide field">
              <button class="ui button" id="cloudinary-upload-widget">
                Upload image file
        </button>
            </div>
          </div>
        </div>
      </template>
    </>
  );
}

export default ImagePage;