(function() {
  var FFScrollable, oldShow,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  FFScrollable = (function() {
    function FFScrollable(options) {
      if (options == null) {
        options = {};
      }
      this.scroll = __bind(this.scroll, this);
      this.window = $(window);
      this.currentScroll = this.window.scrollTop();
      this.window.on('scroll', this.scroll);
      this.scrollLimit = options.scrollLimit;
      this.scrollLimitTopCallback = options.topLimitReached;
      this.scrollLimitBottomCallback = options.bottomLimitReached;
      if (this.window.scrollTop() > this.scrollLimit) {
        this.scrollLimitBottomCallback();
      } else {
        this.scrollLimitTopCallback();
      }
    }

    FFScrollable.prototype.scroll = function() {
      var scroll;
      scroll = this.window.scrollTop();
      if (scroll > this.scrollLimit) {
        if (this.currentScroll < this.scrollLimit) {
          this.scrollLimitBottomCallback();
        }
      } else {
        if (this.currentScroll > this.scrollLimit) {
          this.scrollLimitTopCallback();
        }
      }
      return this.currentScroll = scroll;
    };

    return FFScrollable;

  })();

  oldShow = WOW.prototype.show;

  WOW.prototype.show = function(box) {
    $(box).trigger('wow:show');
    return oldShow.apply(this, arguments);
  };

  $(function() {
    var show_hide_top_form, wow;
    FastClick.attach(document.body);
    $('.tour-image-1').on('wow:show', function() {
      return $(".tour-image-1 .typed-inner").typed({
        strings: ["^500 Too much time spent researching leads when we could be better utilized closing projects. I propose we hire an intern to take some of the load off."],
        typeSpeed: -10
      });
    });
    $('.tour-image-2').on('wow:show', function() {
      return $(".tour-image-2 .typed-inner").typed({
        strings: ["^500 @Amanda, I hear you, this is definitely a growing pain. Let me see what kind of budget we have to work with."],
        typeSpeed: -10
      });
    });
    $('.tour-image-3').on('wow:show', function() {
      return $(".tour-image-3 .typed-inner").typed({
        strings: ["^500 Sounds like a great solution! Let's start looking for strong candidates. "],
        typeSpeed: -10
      });
    });
    wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true
    });
    wow.init();
    show_hide_top_form = $('body').hasClass('toggle-top-signup');
    return window.onscroll = function() {
      var scrolled;
      scrolled = $(window).scrollTop();
      if (scrolled >= 80) {
        $(".navbar-header").addClass("navbar-height");
      }
      if (scrolled < 80) {
        $(".navbar-header").removeClass("navbar-height");
      }
      if (show_hide_top_form && scrolled >= 650) {
        $("body").removeClass("top-signup-form-hidden");
      }
      if (show_hide_top_form && scrolled < 650) {
        return $("body").addClass("top-signup-form-hidden");
      }
    };
  });

}).call(this);
