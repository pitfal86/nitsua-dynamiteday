import { Meteor } from 'meteor/meteor';
import { ImageData } from '../../api/imagedata/imagedata.js';
import { PollingData } from '../../api/imagedata/polingdata.js';

Meteor.publish('ImageData', function publishImageData() {
  return ImageData.find();
});

Meteor.publish('PollingData', function publishPolingData() {
  return PollingData.find();
});