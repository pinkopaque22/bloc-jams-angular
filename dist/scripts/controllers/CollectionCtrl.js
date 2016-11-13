(function() {
  function CollectionCtrl(Fixtures) {
    this.albumCollection = Fixtures.getCollection(12);
    console.log (this.albumCollection);
    }

  angular
      .module('blocJams')
      .controller('CollectionCtrl', CollectionCtrl);
})();
