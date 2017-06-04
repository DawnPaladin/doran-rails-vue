var champs = new Vue({
  el: '#champions',
  data: {
    champs: [],
    champFilterText: ''
  },
  mounted: function() {
    var that = this;
    $.ajax({
      url: '/champions.json',
      success: function(res) {
        that.champs = res;
        console.log(res);
      }
    });
  },
  computed: {
    filteredChamps: function() {
      var that = this;
      return this.champs.filter(function(champ) {
        return champ.name.toLowerCase().startsWith(that.champFilterText.toLowerCase());
      });
    }
  }
});
