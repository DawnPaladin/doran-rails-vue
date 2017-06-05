var roster = new Vue({
  el: '#roster',
  data: {
    rosterPositions: []
  },
  mounted: function() {
    $.ajax({
      url: '/rosters/2.json',
      success: (res) => {
        this.roster = res;
        console.log(res);
      }
    });
  }
});
