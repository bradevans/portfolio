(function() {
  var FFGmaps;

  FFGmaps = (function() {
    function FFGmaps($container) {
      this.$container = $container;
      this.options = {
        lat: this.$container.data('lat'),
        lng: this.$container.data('lng'),
        zoom: this.$container.data('zoom')
      };
      this.mapCanvas = this.$container[0];
      this.position = new google.maps.LatLng(this.options.lat, this.options.lng);
      this.mapOptions = {
        center: this.position,
        zoom: this.options.zoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapCanvas, this.mapOptions);
      new google.maps.Marker({
        position: this.position,
        map: this.map
      });
    }

    return FFGmaps;

  })();

  $(function() {
    return $('.gmaps-container').each(function() {
      return new FFGmaps($(this));
    });
  });

}).call(this);
