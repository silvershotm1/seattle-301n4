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
    $('form').on('submit', function(e){
      console.log(e.target.zipCode.value);
      e.preventDefault();
      webDB.execute(
      'SELECT city, latitude, longitude FROM zips WHERE zip="' + e.target.zipCode.value + '";', function(rows) {
        if(rows.length > 0){
          rows.forEach(function(ele){
          });
          initMap(rows);
          $('#zipCode').css({'background-color': 'white'});
        } else {
          console.log('no');
          $('#zipCode').css({'background-color': 'red'});
        }
      }
    );
    });
  };
  search.handleZips();

  search.handleCities = function(){
    $('#city-select').on('change', function() {
      webDB.execute(
      'SELECT latitude, longitude FROM zips WHERE city="' + this.value + '" AND state="' + $('#state-select').val() + '"', function(rows) {
        initMap(rows);
      });
    });
  };
  search.handleCities();
  module.search = search;
})(window);
