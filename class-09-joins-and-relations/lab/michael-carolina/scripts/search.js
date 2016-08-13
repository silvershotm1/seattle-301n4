(function(module) {

  // TODO: Write the code to populate your filters, and enable the search queries here in search.js
  // TODO: You will also interact with the map.js file here
  var search = {};

  search.showStates = function() {
    webDB.execute(
    'SELECT DISTINCT state FROM zips ORDER BY state ASC', function(rows) {
      if (rows.length) {

        rows.forEach(function(ele) {
          $('#state-select').append('<option value="' + ele.state + '">' + ele.state + '</option>'); //something here
          // console.log(ele.state);
        });
      }
    });
  };
  search.showStates();

  search.showCities = function(rows) {
    $('#city-select').append('<option value="' + rows.city + '">' + rows.city + '</option>');
    console.log(rows.city);
          //  console.log(ele.city);
  };
  // search.showCities();

  search.handleStates = function() {
    $('#state-select').on('change', function(){
      $('#showCity').siblings().remove();
      console.log(this.value);
      webDB.execute(
          'SELECT DISTINCT city FROM zips WHERE state="' + this.value + '" ORDER BY city ASC', function(rows) {
            if (rows.length) {
              rows.forEach(function(ele) {
                search.showCities(ele);
              });
            }
          });
    });
  };
  search.handleStates();

  search.handleZips = function() {
    $('form').on('submit', function(){
      webDB.execute(
      'SELECT DISTINCT city,latitude,longitude FROM zips WHERE zip="' + this.value + '" ORDER BY city DESC', function(rows) {
        console.log(this.value);
        console.log(rows);
        rows.forEach(function(ele) {
          search.handleZips();
        });
      }
    );
    });
  };
  module.search = search;
})(window);
