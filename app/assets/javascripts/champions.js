var champs = new Vue({
  el: '#champions',
  data: {
    champs: [],
  },
  mounted: function() {
    var that;
    that = this;
    $.ajax({
      url: '/champions.json',
      success: function(res) {
        that.champs = res;
        console.log(res);
      }
    });
  }
});
