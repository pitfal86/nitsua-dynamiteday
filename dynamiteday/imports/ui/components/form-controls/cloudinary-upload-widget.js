import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';

Template.Cloudinary_Upload_Widget.events({
  'click #cloudinary-upload-widget': function click(event) {
    event.preventDefault();
    cloudinary.openUploadWidget(
      {
        cloud_name: Meteor.settings.public.cloudinary.cloud_name,
        upload_preset: Meteor.settings.public.cloudinary.upload_preset,
        sources: ['local', 'url', 'camera'],
        //cropping: 'server',
        //cropping_aspect_ratio: 1,
        max_file_size: '10000000',
        //max_image_width: '500',
        //max_image_height: '500',
        min_image_width: '100',
        min_image_height: '100',
      },
      (error, result) => {
        if (error) {
          console.log('Error during Cloudinary upload: ', error);
          return;
        }
        // Otherwise get the form elements
        // console.log('Cloudinary results: ', result);
        const fileName = result[0].original_filename;
        const thumbnail = result[0].thumbnail_url;
        const url = result[0].url;
        $("input[name='cloudinaryFileName']").val(fileName);
        $("input[name='cloudinaryUrl']").val(url);
        $("input[name='cloudinaryThumbnail']").val(thumbnail);
      });
  },
});
