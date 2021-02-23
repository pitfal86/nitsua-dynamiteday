import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { PollingData } from '../../api/imagedata/polingdata.js';

const displayErrorMessages = 'displayErrorMessages';
Template.polls.onCreated(function onCreated() {
    this.messageFlags = new ReactiveDict();
    this.messageFlags.set(displayErrorMessages, false);
    this.subscribe('PollingData');
    this.inputs = new ReactiveVar([])
    this.totalCount = 0;
});

Template.polls.helpers({

    errorClass() {
        return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
    },
    polls() {
        return PollingData.find();
    },
    viewersCount : function(viewer, attending){
        if (attending === "Yes"){
            Template.instance().totalCount = Template.instance().totalCount + viewer.length + 1;
        }
        return (viewer.length + 1 || 0);
    },
    viewTotal () {
        return Template.instance().totalCount;
    },
    inputs: function () {
        return Template.instance().inputs.get();
    }
});

Template.polls.events({
    'click #addNewValue' (event, template) {
        // Prevent default browser form submit
        event.preventDefault();

        var inputs = template.inputs.get();
        inputs.push("attendee");
        template.inputs.set(inputs);
        $('#name').focus();
        $('#attendees').focus();
    },

    'click #removeNewValue' (event, template) {
        // Prevent default browser form submit
        event.preventDefault();

        var inputs = template.inputs.get();
        inputs.pop("attendee");
        template.inputs.set(inputs);
        $('#name').focus();
        $('#attendees').focus();
    },

    'click #submitAll'(event, template) {
        // Prevent default browser form submit
        event.preventDefault();

        function isBlank(str) {
            return (!str || /^\s*$/.test(str));
        }

        // Get name
        const name = document.getElementById("name").value;
        if (isBlank(name)){
            alert("Your name is the minimum required to add to the Guest List");
            $('#name').focus();
            $('#attendees').focus();
        }
        else {
        // Get attending info
            const attending =  template.$('input').is(":checked");
            var willAttend = "";
            if (attending) {
                willAttend = "Yes";
            } else {
                willAttend = "No";
            }

            // Get list of additional people
            var attendeeListDom = document.getElementsByName("attendees");
            var attendeeList = [];

            var i;
            for (i = 0; i < attendeeListDom.length; i++) {
               attendeeList.push(" " + attendeeListDom[i].value);
            }

            // Insert a task into the collection
            PollingData.insert({
              name,
              attendeeList,
              willAttend,
              createdAt: new Date(), // current time
            });

            // Clear form
            document.getElementById("name").value = '';
            document.getElementById("yes").checked = '';
            template.inputs.set([]);

            $('#name').focus();
            $('#attendees').focus();
        }


    },
});
