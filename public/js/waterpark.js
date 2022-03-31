function initMap() {
  var options = {
    zoom: 10,
    center: { lat: 28.3772, lng: -81.5707 },
  };

  var map = new google.maps.Map(document.getElementById('map'), options);

  var markers = [
    {
      coords: { lat: 28.3658, lng: -81.5296 },
      content:
        '<h2> Typhoon Lagoon at Walt Disney World Resort, Address: 1145 E Buena Vista Dr, Orlando, FL 32830, Visits a year: 2.25 million  </h2>',
    },
    {
      coords: { lat: 28.3513, lng: -81.5763 },
      content:
        '<h2>Blizzard Beach, Address: 1534 Blizzard Beach Drive, Orlando, FL 32836, Visits a year: 1.98 million</h2>',
    },

    {
      coords: { lat: 28.4615, lng: -81.4731 },
      content:
        '<h2>Universal’s Volcano Bay, Address: 6000 Universal Blvd, Orlando, FL 32819, Visits a year: 1.81 million   </h2>',
    },

    {
      coords: { lat: 28.4153, lng: -81.4554 },
      content:
        '<h2>Aquatica, Address: 5800 Water Play Way, Orlando, FL 32821,Visits a year: 1.53 million  </h2>',
    },

    {
      coords: { lat: 25.0862, lng: -77.3238 },
      content:
        '<h2> Atlantis Aquaventure, Address: One Casino Drive, Suite 42, Paradise Island, Bahamas, Visits a year: 1.81 million   </h2   >',
    },
  ];

  //Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: 'http://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    });

    //check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    }
  }
  //Loop through markers

  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }


}

initMap();