var champs = new Vue({
  el: '#champions',
  data: {
    champs: [],
    champFilterText: ''
  },
  mounted: function() {
    $.ajax({
      url: '/champions.json',
      success: (res) => {
        this.champs = res;
        console.log(res);
      }
    });
  },
  computed: {
    filteredChamps: function() {
      return this.champs.filter( (champ) => champ.name.toLowerCase().startsWith(this.champFilterText.toLowerCase()) );
    }
  }
});
