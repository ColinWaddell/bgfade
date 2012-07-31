bgFade
======

JQuery plugin to allow for the dynamic switching of full screen background images.

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
 * fade: the time for the transission to complete. Legal values include:
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


  $(document).ready(function() {
    // Create the an instanace of the fader and set it's color to red.
    // These statements can be comounded for brevity.
    $.bgFade();
    $.bgFade('addColor','red');
  });
