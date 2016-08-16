/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  Time: 6min */
    $(document).on("click", ".uib_w_5", function(evt)
    {
        document.location.href="http://www.pizzahut.com";
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
