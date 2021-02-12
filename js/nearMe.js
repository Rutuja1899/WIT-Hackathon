function initMap(topic) {

  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  switch (topic) {
    case 0:
      var center = {lat: 23.175447226755338, lng: 79.98656168529317};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: center
      });

      var locations = [
        ['Dr D K Katiyar', 23.17133453728207, 79.9085176097301],
        ['gynaecology hospital', 26.706635688334213, 78.23443924320325],
        ['Dr Satya Ranjan Das', 22.560218585897793, 84.84690387187702],
        ['Dr Deepa Baruah', 28.64108646284352, 91.4932938604642],
        ['Dr Anitha BR', 12.991355223401877, 77.74644392814544]
      ];

      var infowindow =  new google.maps.InfoWindow({});
      var marker, count;
      for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[count][1], locations[count][2]),
          map: map,
          title: locations[count][0]
        });
      google.maps.event.addListener(marker, 'click', (function (marker, count) {
          return function () {
            infowindow.setContent(locations[count][0]);
            infowindow.open(map, marker);
          }
        })(marker, count));
      }

      var marker = new google.maps.Marker({
        position: center,
        map: map
      });
    break;

    case 1:
      var center = {lat: 23.175447226755338, lng: 79.98656168529317};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: center
      });

      var locations = [
        ['Gym In JP Nagar, Bangalore - Lotus Sports and Fitness', 12.893250782803959, 77.57616833949359],
        ['Abinaya Gym & Health Centre', 13.106946896448315, 80.24375200724943],
        ['Anytime Fitness', 28.73944846470471, 77.1931917754541],
        ['Fitness 365D (Mumbai Central)', 18.972041146455926, 72.8264637934507],
        ['Raghav Gym', 28.264455737738878, 77.07639576406197]
      ];

      var infowindow =  new google.maps.InfoWindow({});
      var marker, count;
      for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[count][1], locations[count][2]),
          map: map,
          title: locations[count][0]
        });
      google.maps.event.addListener(marker, 'click', (function (marker, count) {
          return function () {
            infowindow.setContent(locations[count][0]);
            infowindow.open(map, marker);
          }
        })(marker, count));
      }

      var marker = new google.maps.Marker({
        position: center,
        map: map
      });
    break;

    case 2:
      var center = {lat: 23.175447226755338, lng: 79.98656168529317};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: center
      });

      var locations = [
        ['Life Care Blood Bank', 12.962954112617954, 77.58439303672044],
        ['Borivali Blood Bank', 13.106946896448315, 80.24375200724943],
        ['Shri Sathya Sai Blood Bank', 22.728273234522185, 75.90087335155542],
        ['BLOOD BANK ASYM D.H. BUDGAM', 34.02201967273817, 74.71948438481489],
        ['Navarang Blood Bank', 13.54462932231677, 77.51874096803472]
      ];

      var infowindow =  new google.maps.InfoWindow({});
      var marker, count;
      for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[count][1], locations[count][2]),
          map: map,
          title: locations[count][0]
        });
      google.maps.event.addListener(marker, 'click', (function (marker, count) {
          return function () {
            infowindow.setContent(locations[count][0]);
            infowindow.open(map, marker);
          }
        })(marker, count));
      }

      var marker = new google.maps.Marker({
        position: center,
        map: map
      });
    break;

    case 3:
      var center = {lat: 23.175447226755338, lng: 79.98656168529317};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: center
      });

      var locations = [
        ['Dr. Jayaram Shetty', 19.211087296053673, 72.95967193030916],
        ['Dr. Ravindra Chittal', 19.059818706341087, 72.83682107994203],
        ['Dr. Sameer Mhatre', 18.654377495370564, 73.92219539742848],
        ['Dr.Thangavel MD and vaccination centre', 10.817777151794953, 78.68045340203983],
        ['Aditya Clinic', 31.018340172894447, 77.08549365972085]
      ];

      var infowindow =  new google.maps.InfoWindow({});
      var marker, count;
      for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[count][1], locations[count][2]),
          map: map,
          title: locations[count][0]
        });
      google.maps.event.addListener(marker, 'click', (function (marker, count) {
          return function () {
            infowindow.setContent(locations[count][0]);
            infowindow.open(map, marker);
          }
        })(marker, count));
      }

      var marker = new google.maps.Marker({
        position: center,
        map: map
      });
    break;

    case 4:
      var center = {lat: 23.175447226755338, lng: 79.98656168529317};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: center
      });

      var locations = [
        ['Rampurhat Health District Hospital', 24.68840940567485, 87.80066894442935],
        ['Govt. Hospital', 17.64326883314806, 77.3863310270559],
        ['St Johns Hospital', 10.037449203125451, 77.1165617311112],
        ['SRMS Goodlife', 28.5895310956788, 79.44697383332604],
        ['Marwar Hospital', 28.085591325773024, 73.35390254305463]
      ];

      var infowindow =  new google.maps.InfoWindow({});
      var marker, count;
      for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[count][1], locations[count][2]),
          map: map,
          title: locations[count][0]
        });
      google.maps.event.addListener(marker, 'click', (function (marker, count) {
          return function () {
            infowindow.setContent(locations[count][0]);
            infowindow.open(map, marker);
          }
        })(marker, count));
      }

      var marker = new google.maps.Marker({
        position: center,
        map: map
      });
    break;

    default:
      var center = {lat: 23.175447226755338, lng: 79.98656168529317};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: center
      });

      var locations = [
        ['Dr D K Katiyar', 23.17133453728207, 79.9085176097301],
        ['gynaecology hospital', 26.706635688334213, 78.23443924320325],
        ['Dr Satya Ranjan Das', 22.560218585897793, 84.84690387187702],
        ['Dr Deepa Baruah', 28.64108646284352, 91.4932938604642],
        ['Dr Anitha BR', 12.991355223401877, 77.74644392814544]
      ];

      var infowindow =  new google.maps.InfoWindow({});
      var marker, count;
      for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[count][1], locations[count][2]),
          map: map,
          title: locations[count][0]
        });
      google.maps.event.addListener(marker, 'click', (function (marker, count) {
          return function () {
            infowindow.setContent(locations[count][0]);
            infowindow.open(map, marker);
          }
        })(marker, count));
      }

      var marker = new google.maps.Marker({
        position: center,
        map: map
      });
    break;
  }
}
