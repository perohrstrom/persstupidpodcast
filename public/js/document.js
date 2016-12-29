$(document).ready(function(){
  $(".dropdown-button").dropdown({ hover: false });
  $('.episode-content').css("display: hidden");
  $('.movie_form').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        starting_top: '4%', // Starting top style attribute
        ending_top: '10%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
          alert("Ready");
          console.log(modal, trigger);
        },
        complete: function() { alert('Closed'); } // Callback for Modal close
      }
    );

    $('.button-collapse').sideNav({
       menuWidth: 300, // Default is 240
       edge: 'left', // Choose the horizontal origin
       closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
       draggable: true // Choose whether you can drag to open on touch screens
     }
   );
   console.log("i'm loading the correct INDEX.js file")
})
