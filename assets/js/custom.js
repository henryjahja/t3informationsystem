$(document).ready(function(){
	
	$('body').wrapInner('<div class="wraper" />');
	/*
	=================================================================
	MAIN BANNER SLIDER
	=================================================================
	*/
	
	$('#slider').bxSlider({
		controls: false,
		auto: true,
		pager: true,
		easing: 'easeInOutQuint',
		speed:800,
		onAfterSlide: function(slideIndex){
			
			var getSlideObj = $('#slider .pager').eq(slideIndex);
			var capHD = getSlideObj.find('.caption > .cap-hd');
			var capTXT = getSlideObj.find('.caption > .cap-txt');
			
			var gethdW = capHD.outerWidth();
			var gettxtW = capTXT.outerWidth();
			
			var IEget = $.browser;
			if ( IEget.msie && IEget.version == "7.0" ) {
				
			}else{
				// SET CAPTION OBJECT IN MINUS POSITION
				capHD.css({left:-gethdW, opacity:0});
				capTXT.css({left:-gettxtW, opacity:0});
				
				capHD.stop().animate({ 
					left:-gethdW,
					left:0,
					opacity:0,
					opacity:1
					}, 500, 'easeInOutQuint', function() {});
				capTXT.stop().animate({ 
					left:-gettxtW,
					left:0,
					opacity:0,
					opacity:1
					}, 1000, 'easeInOutQuint', function() {});
				}
			},
		onBeforeSlide:  function(slideIndex){
			
			var getSlideObj = $('#slider .pager').eq(slideIndex);
			var capHD = getSlideObj.find('.caption > .cap-hd');
			var capTXT = getSlideObj.find('.caption > .cap-txt');
			
			var gethdW = capHD.outerWidth();
			var gettxtW = capTXT.outerWidth();
			
			var IEget = $.browser;
			
			if ( IEget.msie && IEget.version == "7.0" ) {
				
			}else{
				
				capHD.css({left:-gethdW, opacity:0});
				capTXT.css({left:-gettxtW, opacity:0});
				}
			
			
		}
	});

	/*
	=================================================================
	VERTICAL ACCORDIAN FOR SERVICES SECTION
	=================================================================
	*/
	
	/***************** VA SLICE SCROLL PANE *****************/
	// THIS FUNCTION APPLY ID ON ALL SCROLLPANE OBJECTS
	var i = 0;
	$('.scrollPane').each(function(){
		
		// SET ID ON ALL SCROLL PANE
		i++;
		var createID = 'sp'+i;
		$(this).attr('id', createID);
		$(this).wrapInner('<div class="dataHolder"></div>');
		
		// CONDITION FOR WEB KIT BROWSER'S ONLY
		if ($.browser.webkit) {
			
			var H = $(this).find('.dataHolder').outerHeight();
			if((H >= 1) && (H <= 500)){
				$(this).find('.dataHolder').css({height:H + 50});
			}if((H >= 501) && (H <= 1000)){
				$(this).find('.dataHolder').css({height:H + 100});
			}if((H >= 1001) && (H <= 2000)){
				$(this).find('.dataHolder').css({height:H + 300});
			}if((H >= 2001) && (H <= 3000)){
				$(this).find('.dataHolder').css({height:H + 450});
			}
		}
		
		// CALLING SCROLL PANE FUNCTION
		setScrollPane();
		
	});
	function setScrollPane(){
		
		createID = '#sp'+i;
		
		// the element we want to apply the jScrollPane
		var $el	= $(createID).jScrollPane({
			verticalGutter 	: -10
		}),
				
		// the extension functions and options 	
		extensionPlugin 	= {
			
			extPluginOpts	: {
				// speed for the fadeOut animation
				mouseLeaveFadeSpeed	: 500,
				// scrollbar fades out after hovertimeout_t milliseconds
				hovertimeout_t		: 1000,
				// if set to false, the scrollbar will be shown on mouseenter and hidden on mouseleave
				// if set to true, the same will happen, but the scrollbar will be also hidden on mouseenter after "hovertimeout_t" ms
				// also, it will be shown when we start to scroll and hidden when stopping
				useTimeout			: true,
				// the extension only applies for devices with width > deviceWidth
				deviceWidth			: 980
			},
			hovertimeout	: null, // timeout to hide the scrollbar
			isScrollbarHover: false,// true if the mouse is over the scrollbar
			elementtimeout	: null,	// avoids showing the scrollbar when moving from inside the element to outside, passing over the scrollbar
			isScrolling		: false,// true if scrolling
			addHoverFunc	: function() {
				
				// run only if the window has a width bigger than deviceWidth
				if( $(window).width() <= this.extPluginOpts.deviceWidth ) return false;
				
				var instance		= this;
				
				// functions to show / hide the scrollbar
				$.fn.jspmouseenter 	= $.fn.show;
				$.fn.jspmouseleave 	= $.fn.fadeOut;
				
				// hide the jScrollPane vertical bar
				var $vBar			= this.getContentPane().siblings('.jspVerticalBar, .jspHorizontalBar').hide();
				
				/*
				 * mouseenter / mouseleave events on the main element
				 * also scrollstart / scrollstop - @James Padolsey : http://james.padolsey.com/javascript/special-scroll-events-for-jquery/
				 */
				$el.bind('mouseenter.html',function() {
					
					// show the scrollbar
					$vBar.stop( true, true ).jspmouseenter();
					
					if( !instance.extPluginOpts.useTimeout ) return false;
					
					// hide the scrollbar after hovertimeout_t ms
					clearTimeout( instance.hovertimeout );
					instance.hovertimeout 	= setTimeout(function() {
						// if scrolling at the moment don't hide it
						if( !instance.isScrolling )
							$vBar.stop( true, true ).jspmouseleave( instance.extPluginOpts.mouseLeaveFadeSpeed || 0 );
					}, instance.extPluginOpts.hovertimeout_t );
					
					
				}).bind('mouseleave.html',function() {
					
					// hide the scrollbar
					if( !instance.extPluginOpts.useTimeout )
						$vBar.stop( true, true ).jspmouseleave( instance.extPluginOpts.mouseLeaveFadeSpeed || 0 );
					else {
					clearTimeout( instance.elementtimeout );
					if( !instance.isScrolling )
							$vBar.stop( true, true ).jspmouseleave( instance.extPluginOpts.mouseLeaveFadeSpeed || 0 );
					}
					
				});
				
				if( this.extPluginOpts.useTimeout ) {
					
					$el.bind('scrollstart.html', function() {
					
						// when scrolling show the scrollbar
					clearTimeout( instance.hovertimeout );
					instance.isScrolling	= true;
					$vBar.stop( true, true ).jspmouseenter();
					
				}).bind('scrollstop.html', function() {
					
						// when stop scrolling hide the scrollbar (if not hovering it at the moment)
					clearTimeout( instance.hovertimeout );
					instance.isScrolling	= false;
					instance.hovertimeout 	= setTimeout(function() {
						if( !instance.isScrollbarHover )
								$vBar.stop( true, true ).jspmouseleave( instance.extPluginOpts.mouseLeaveFadeSpeed || 0 );
						}, instance.extPluginOpts.hovertimeout_t );
					
				});
				
					// wrap the scrollbar
					// we need this to be able to add the mouseenter / mouseleave events to the scrollbar
				var $vBarWrapper	= $('<div/>').css({
					position	: 'absolute',
					left		: $vBar.css('left'),
					top			: $vBar.css('top'),
					right		: $vBar.css('right'),
					bottom		: $vBar.css('bottom'),
					width		: $vBar.width(),
					height		: $vBar.height()
				}).bind('mouseenter.html',function() {
					
					clearTimeout( instance.hovertimeout );
					clearTimeout( instance.elementtimeout );
					
					instance.isScrollbarHover	= true;
					
						// show the scrollbar after 100 ms.
						// avoids showing the scrollbar when moving from inside the element to outside, passing over the scrollbar								
					instance.elementtimeout	= setTimeout(function() {
						$vBar.stop( true, true ).jspmouseenter();
					}, 100 );	
					
				}).bind('mouseleave.html',function() {
					
						// hide the scrollbar after hovertimeout_t
					clearTimeout( instance.hovertimeout );
					instance.isScrollbarHover	= false;
					instance.hovertimeout = setTimeout(function() {
							// if scrolling at the moment don't hide it
						if( !instance.isScrolling )
								$vBar.stop( true, true ).jspmouseleave( instance.extPluginOpts.mouseLeaveFadeSpeed || 0 );
						}, instance.extPluginOpts.hovertimeout_t );
					
				});
				
				$vBar.wrap( $vBarWrapper );
				
			}
			
			}
			
		},
		
		// the jScrollPane instance
		jspapi 			= $el.data('jsp');
		
		// extend the jScollPane by merging	
		$.extend( true, jspapi, extensionPlugin );
		jspapi.addHoverFunc();
	}
	
	
	/***************** VA SLICE SCROLLER *****************/
	$('#bxScroll_1 .scroller-bd').bxSlider({
		controls: true,
		auto: false,
		displaySlideQty:3,
		moveSlideQty:3,
		infiniteLoop:false,
		pager: false,
		speed:800,
		onFirstSlide:function(){
			$('#bxScroll_1 .bx-prev').addClass('disabled');
			},
		onLastSlide:function(){
			$('#bxScroll_1 .bx-next').addClass('disabled');
			},
		onPrevSlide:function(){
			$('#bxScroll_1 .bx-next').removeClass('disabled');
			},
		onNextSlide:function(){
			$('#bxScroll_1 .bx-prev').removeClass('disabled');
			}
		
	});
	$('#bxScroll_1 .bx-next').prependTo('.bx-controls');
	$('#bxScroll_1 .bx-prev').prependTo('.bx-controls');
	
	
	/***************** TABS *****************/
	// SET TABS IN VA SLICE AFTER SCROLL PANE APPLY 
	$("#tab1 .tabs").tabs("#tab1 .tab-pane-container > .tab-pane", {});
	$("#tab2 .tabs").tabs("#tab2 .tab-pane-container > .tab-pane", {});
	
	
	/***************** VA SLICE JS *****************/
	// POSITION SET FOR SLICE OPEN ICONS
	setPosition();
	$(window).resize(function(){
		setPosition();
		});
	function setPosition(){
		$('.va-ctrl').css({
			right: ($(window).width() - $('.va-title').width())/2
		});
		$('.va-nav span').css({left: ($('.va-nav').outerWidth() - $('.va-nav span').outerWidth())/2});
	}
	
	$('#service-list').vaccordion({
		accordionW      : '',
		accordionH      : 484,
		visibleSlices   : 4,
		expandedHeight  : 484,
		animOpacity     : 0.3,
		contentAnimSpeed: 300,
		animSpeed		: 300
	});
	
	/*
	=================================================================
	GENERAL LOADING IMAGE
	=================================================================
	*/
	
	function setLoading(){
		var getHposition = ($('.loading').parent().outerWidth()-$('.loading').width())/2;
		var getVposition = ($('.loading').parent().outerHeight()-$('.loading').height())/2;
		console.log(getHposition);
		$('.loading').css({
			position: 'absolute',
			left:getHposition,
			top:getVposition
			});	
		}

	/*
	=================================================================
	PORTFOLIO 
	=================================================================
	*/
	
	var i = 0;
	$('.items-holder > li').each(function(){
		
		// SET ID ON ALL THUMBS
		i++;
		var createID = 'id-'+i;
		$(this).attr('data-id', createID);
		
	});
	
	thumbIcons();
	// get the action filter option item on page load
	var $filterType = $('.prj-category li.active a').attr('class');
	// get and assign the ourHolder element to the
	// $holder varible for use later
	var $holder = $('ul.items-holder');
	// clone all items within the pre-assigned $holder element
	var $data = $holder.clone();
	
	// attempt to call Quicksand when a filter option
	// item is clicked
	$('.prj-category li a').click(function(e) {
			
			
		// reset the active class on all the buttons
		$('.prj-category li').removeClass('active');
			
		// assign the class of the clicked filter option
		// element to our $filterType variable
		var $filterType = $(this).attr('class');
		$(this).parent().addClass('active');
		
		if ($filterType == 'all') {
			// assign all li items to the $filteredData var when
			// the 'All' filter option is clicked
			var $filteredData = $data.find('li');
		} 
		else {
			// find all li elements that have our required $filterType
			// values for the data-type element
			var $filteredData = $data.find('li[data-type=' + $filterType + ']');
		}
		
		// call quicksand and assign transition parameters
		$holder.quicksand($filteredData, {
			duration: 800,
			adjustHeight: 'dynamic',
			easing: 'easeInOutQuad'
		}, function() {
			thumbIcons();
		});
		thumbIcons();
		return false;
	});
	
	/***************** PORTFOLIO THUMB HOVER *****************/
  	// THIS FUNCTION SET THUMB ICONS FOR HOVER CASE
	function thumbIcons(){
		
		// SET THUMB ICONS
		$('.thumb .ctrls').css({
			width:$('.thumb').width(),
			height:$('.thumb').height(),
			opacity:0
		});
		
		$('.thumb .ctrls > .icons').css({
			top:($('.thumb').height() - $('.thumb .ctrls > .icons').height())/2,
			opacity:0
		});
		
		// SET HOVER EFFECT 
		$('.items-holder').find('.thumb').mouseenter(function(){
			$(this).addClass('active-thumb');
			
			/***************** PORTFOLIO INFO *****************/
			
			var dataHolder = $(".active-thumb .pr-info");
			// COLOUR BOX CONTROL FOR PROJECT INFO CASE
			$(".ctrls > .info").colorbox({
				inline:true, 
				width:"946px", 
				height:"452px",
				scrolling:false,
				href:$(".active-thumb .pr-info"),
				onComplete:function(){
					$('#cboxTitle').css({display:'none'});
					$('#cboxContent').find('.prj-slides').bxSlider({
						mode:'fade',
						controls: false,
						auto: true,
						pager: true,
						speed:800,
						infiniteLoop:true
					});
					},
				onOpen:function(){
					$("#cboxOverlay").css({minHeight:""});
					$("#cboxOverlay").css({minHeight:$(".wraper").outerHeight()});
					$("#header-wrapper").animate({ opacity:1, opacity:0 }, 300);
					},
				onClosed:function(){ 
					$("#header-wrapper").animate({ opacity:0, opacity:1 }, 300);
					},
				onCleanup:function(){}
				
				
			});
			
			// ANIMATING ICONS ON MOUSE HOVER
			$(this).find('.ctrls').stop().animate({opacity:1}, 300);
			$(this).find('.ctrls > .icons').stop().animate({opacity:1}, 300); 
			
		}).mouseleave(function(){
			// ANIMATING ICONS ON MOUSE OUT
			$(this).removeClass('active-thumb');
			$(this).find('.ctrls').stop().animate({opacity:0}, 300);
			$(this).find('.ctrls > .icons').stop().animate({opacity:0}, 300); 
		});
		
		/***************** PORTFOLIO PROJECT'S SLIDE SHOW *****************/
		// COLOUR BOX FOR SLIDE SHOW
		$(".ctrls > a.slide-show").colorbox({
			rel:'slide-show', 
			slideshow:true,
			onComplete:function(){
				$('#cboxContent').css({paddingBottom:'48px'});
				$('#colorbox').css({paddingBottom:'48px'});
				},
			onOpen:function(){
				$("#cboxOverlay").css({minHeight:""});
				$("#cboxOverlay").css({minHeight:$(".wraper").outerHeight()});
				$("#header-wrapper").animate({ opacity:1, opacity:0 }, 300);
				},
			onClosed:function(){ 
				$('#cboxContent').css({paddingBottom:'0px'});
				$('#colorbox').css({paddingBottom:'0px'});
				$("#header-wrapper").animate({ opacity:0, opacity:1 }, 300);
				}
		});
		// PLAY PAUSE CONTROL FOR SLIDESHOW
		$("#cboxSlideshow").toggle(
			function(){ $(this).addClass('play'); },
			function(){ $(this).removeClass('play'); }
		);
		
	}

	/*
	=================================================================
	MAIN NAVIGATION
	=================================================================
	*/
	
	/* NAVIGATION SCROLL TO PLUG-IN
	==============================================*/
	var headerHeight = $('#header').outerHeight() - 10;
	
	$("body").css({ paddingTop:headerHeight });
	
	// THIS IS SET HOME POSITION ON REFRESH THE PAGE
	$.scrollTo( 0, 400, {
		offset:{ top:-headerHeight },
		easing:'easeInOutQuint'
		});
	
	$('.navigation-links a, .logo').click(function(){
		
		// SET ACTIVE CLASS ON NAVIGATION LINK
		$('.navigation-links a').removeClass('active');
		$(this).addClass('active');
		if($(this).hasClass('logo')){
			$(this).removeClass('active');
			$('.navigation-links a').first().addClass('active');
		}
		
		// THIS FINCTION SCROLL PAGE 
		$.scrollTo( this.hash, 400, {
			offset:{ top:-headerHeight },
			easing:'easeInOutQuint'
			});
		return false;
	});
	
});