bgFade
======

JQuery plugin to allow for the dynamic switching of full screen background images.

This script relies on the accompanying css file in order to work.

An demo can be found [here](http://colinwaddell.com/bgfade/ "bgFade Demo").


Initialising bgFade
======

Both the js and the css must be included in your page along with a recent version of jQuery.

    <script src="jquery.bgfade.js"></script>
    <link rel="stylesheet" href="jquery.bgfade.css" type="text/css" media="all" />

bgFade can then be initialised:

Initialising: $.bgFade([options])
======

When initially launching bgFade the following parameters can be used:

 * opacity: the final opacity of the background
 * fade: the time for the transition to complete. Legal values include:
   - 0 - No fade
   - duration - the time to fade in milliseconds
   - "fast" - 200ms duration
   - "slow" - 600ms duration

Methods: $.bgFade('method', 'value', [options])
======

The following methods are available

 * 'AddSlide'
   - value: the url of the requested background image
 * 'AddColor'
   - value: the HTML colour code of the background

At any point new options may be applied to bgFade.


Examples
======

Launching bgFade and setting a background image:

    $(document).ready(function() {
        $.bgFade();
        $.bgFade('addSlide', 'bgsample.jpg');
    });

This statement can be reduced to:

    $(document).ready(function() {
        $.bgFade().bgFade('addSlide', 'bgsample.jpg');
    });

Launching bgFade with non-default settings is accomplished with:

    $.bgFade({opacity:0.5, fade: 'fast'});
    
Setting the background to a new colour with new settings:

    $.bgFade('addColour', '#00FFA0', {opacity:0.75});
