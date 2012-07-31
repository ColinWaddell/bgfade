/*

	bgFade - Fullscreen Background Fader Plugin
	Version : 0.1
	Site	: http://colinwaddell.com/wordpress/bgfade-jquery-plugin/
	
	Author	: Colin Waddell
	Company : Colin Waddell.com
	License : MIT License / GPL License
	
*/

(function($) {
  
  var internals = {
	// private methods
	createActiveSlide: function() {
		$(".bgFadeActive").removeClass("bgFadeActive");	
		$("ul#bgFade").append('<li id="bgFade" class="bgFadeActive"></li>');
	},

	fadeSlides: function()
	{
		var opts = $("body").data('bgFade').opts;
		$(".bgFadeActive").fadeTo(opts.fade, opts.opacity);
		$("ul#bgFade").children("li").not(".bgFadeActive").fadeTo(opts.fade, 0, 
			function() {
				$(this).remove();
			});
	}
  };
  
  var methods = {
    init: function( options ) {
		var $body = $('body'),
		  	 opts = $.extend({}, $.bgFade.defaults, options),
			 data = $body.data('bgFade');
  
      // If the plugin hasn't been initialized yet
      if ( ! data ) {
			$("body").append('<ul id="bgFade"></ul>');
			$body.data('bgFade', {opts: opts});
      };

      return this;  // For chaining
    },

	addSlide: function(url, options) {
		$(document).ready(function() {
			$.extend($("body").data('bgFade').opts, options);
			internals.createActiveSlide();
			$(".bgFadeActive").css({"background":"url("+url+")", "opacity": 0});
			internals.fadeSlides();
		});
	},

	addColor: function(color, options) {
		$(document).ready(function() {
			$.extend($("body").data('bgFade').opts, options);
			internals.createActiveSlide();
			$(".bgFadeActive").css({"background":color, "opacity": 0});
			internals.fadeSlides();
		});
	}
  };

  // main plugin declaration:
  $.bgFade = function( method ) {
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.bgFade' );
    };
  };

  //	defaults
  $.bgFade.defaults = {
		opacity: 1,
		fade: "slow"  
	};

})(jQuery);

