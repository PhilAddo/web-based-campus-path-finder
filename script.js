let landmarks = {};

fetch('landmarks.json')
  .then(res => res.json())
  .then(data => {
    landmarks = data;
    Object.keys(landmarks).forEach(name => {
      L.marker(landmarks[name])
        .addTo(map)
        .bindPopup(`<b>${name.toUpperCase()}</b>`);
    });
  });

const map = L.map('map').setView([5.596, -0.223], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 20,
}).addTo(map);

function searchLocation() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const coords = landmarks[input];

  if (coords) {
    const msg = new SpeechSynthesisUtterance(`Navigating to ${input}`);
    window.speechSynthesis.speak(msg);

    map.setView(coords, 18);
    L.popup()
      .setLatLng(coords)
      .setContent(`<b>${input.toUpperCase()}</b>`)
      .openOn(map);
  } else {
    alert("Location not found. Try another name.");
  }
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

function increaseTextSize() {
  document.body.classList.toggle("large-font");
}

// Example accessible path
const accessiblePath = [
  [5.6181, -0.2204],
  [5.6178, -0.2198]
];

L.polyline(accessiblePath, {
  color: 'blue',
  weight: 5,
  dashArray: '10, 10'
}).addTo(map).bindPopup("Accessible Path");

let routeMode = null;
let startPoint = null;
let endPoint = null;
let routeLine = null;

function setRouteMode(mode) {
  routeMode = mode;
  alert(`Click on the map to set the ${mode} point`);
}

map.on('click', function (e) {
  if (!routeMode) return;

  if (routeMode === 'start') {
    if (startPoint) map.removeLayer(startPoint);
    startPoint = L.marker(e.latlng, { draggable: true }).addTo(map).bindPopup("Start Point").openPopup();
  }

  if (routeMode === 'end') {
    if (endPoint) map.removeLayer(endPoint);
    endPoint = L.marker(e.latlng, { draggable: true }).addTo(map).bindPopup("End Point").openPopup();
  }

  routeMode = null;
});

function drawRoute() {
  if (startPoint && endPoint) {
    const startLatLng = startPoint.getLatLng();
    const endLatLng = endPoint.getLatLng();

    if (routeLine) map.removeLayer(routeLine);

    routeLine = L.polyline([startLatLng, endLatLng], {
      color: 'green',
      weight: 4
    }).addTo(map).bindPopup("Custom Route").openPopup();
  } else {
    alert("Please select both Start and End points.");
  }
}

function clearRoute(){
  startPoint.remove();
  endPoint.remove();
  routeLine.remove();
}

//gets the user's location
function getUser(){
  map.locate({setView: true, maxZoom: 16});
  //when location is found
  function onLocationFound(e){
    var radius = e.accuracy / 2;
    //add a marker
    L.marker(e.latlng).addTo(map).bindPopup(`You are within ${radius} meters from this point`).openPopup();
    
    //add accuracy circle
    L.circle(e.latlng, radius).addTo(map);
  }

  //when location is not found
  function onLocationError(e){
    alert(e.message);
  }

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);
}

// map.on('click', function(e){
//   console.log(`lat: ${e.latlng.lat}, long: ${e.latlng.lng}`);
// });

//marker for Main Building
let mainBuildingMarker = L.marker([5.596841187565221, -0.2232778072357178]);
  mainBuildingMarker.addTo(map);
mainBuildingMarker.on('click', function(){
  showLocMenu2(99, 113);
});

//marker for Block B
let blockBMarker = L.marker([5.596520932579942, -0.22373378276824954]);
  blockBMarker.addTo(map);
blockBMarker.on('click', function(){
  showLocMenu2(51, 213);
});

//marker for Cafeteria
let cafeteriaMarker = L.marker([5.596035065040515, -0.2237096428871155]);
  cafeteriaMarker.addTo(map);
cafeteriaMarker.on('click', function(){
  showLocMenu2(46, 333);
});

//marker for Engineering Block
let engineeringBlockMarker = L.marker([5.5961016396499375, -0.22299617528915408]);
  engineeringBlockMarker.addTo(map);
engineeringBlockMarker.on('click', function(){
  showLocMenu2(190, 296);
});

//marker for Hostel Block A
let hostelBlockAMarker = L.marker([5.595703964235648, -0.2236077189445496]);
  hostelBlockAMarker.addTo(map);
hostelBlockAMarker.on('click', function(){
  showLocMenu2(45, 392);
});

//marker for Hostel Block B
let hostelBlockBMarker = L.marker([5.595463928846843, -0.22325634956359866]);
  hostelBlockBMarker.addTo(map);
hostelBlockBMarker.on('click', function(){
  showLocMenu2(136, 453);
});

//marker for Hostel Block C
let hostelBlockCMarker = L.marker([5.5955816621938155, -0.22296130657196048]);
  hostelBlockCMarker.addTo(map);
hostelBlockCMarker.on('click', function(){
  showLocMenu2(190, 419);
});

//marker for Airport
let airportMarker = L.marker([5.59581909725854, -0.22292912006378174]);
  airportMarker.addTo(map);
airportMarker.on('click', function(){
  showLocMenu2(231, 373);
});

//marker for Graduate School
let graduateSchoolMarker = L.marker([5.595919965214853, -0.22272393107414248]);
  graduateSchoolMarker.addTo(map);
graduateSchoolMarker.on('click', function(){
  showLocMenu2(264, 352);
});

//marker for Great Hall
let greatHallMarker = L.marker([5.59552280973244, -0.223897397518158]);
  greatHallMarker.addTo(map);
greatHallMarker.on('click', function(){
  showLocMenu2(7, 454);
});

//marker for Bush Canteen
let bushCanteenMarker = L.marker([5.595234371202593, -0.22369086742401126]);
  bushCanteenMarker.addTo(map);
bushCanteenMarker.on('click', function(){
  showLocMenu2(48, 494);
});

//marker for Football Field
let footballFieldMarker = L.marker([5.59502370788417, -0.2233877778053284]);
  footballFieldMarker.addTo(map);
footballFieldMarker.on('click', function(){
  showLocMenu2(129, 570);
});

function clearAllLocationMakers(){
  searchingLocation = true;
  mainBuildingMarker.remove();
  blockBMarker.remove();
  cafeteriaMarker.remove();
  engineeringBlockMarker.remove();
  hostelBlockAMarker.remove();
  hostelBlockBMarker.remove();
  hostelBlockCMarker.remove();
  airportMarker.remove();
  graduateSchoolMarker.remove();
  greatHallMarker.remove();
  bushCanteenMarker.remove();
  footballFieldMarker.remove();
}

function addAllMarkers(){
  searchingLocation = true;
  mainBuildingMarker.addTo(map);
  blockBMarker.addTo(map);
  cafeteriaMarker.addTo(map);
  engineeringBlockMarker.addTo(map);
  hostelBlockAMarker.addTo(map);
  hostelBlockBMarker.addTo(map);
  hostelBlockCMarker.addTo(map);
  airportMarker.addTo(map);
  graduateSchoolMarker.addTo(map);
  greatHallMarker.addTo(map);
  bushCanteenMarker.addTo(map);
  footballFieldMarker.addTo(map);
}

function checkSearchInput(){
  var location = document
      .getElementById("searchInput")
      .value.trim();
  if(location == ""){
    addAllMarkers();
  }
}

//----------------------------------------
//-- JS Code for other site starts here --
//----------------------------------------
  //switches to the page with the passed name
function goToPage(pageName) {
  window.location.href = pageName;
}

let adminObj = {
  id: "pathfinderadmin",
  password: "p@thFinder25"
}

//authenticates and logs in an admin
function logIn(event) {
  event.preventDefault();
  let logInForm = document.getElementById("login-form");
  let adminId = logInForm.children[0].value;
  let password = logInForm.children[2].value;
  let foundStudent = false;
  
  if(adminId == adminObj.id && password == adminObj.password){
    sessionStorage.setItem("activeUser", "admin");
    window.location.href = "admin-dashboard.html";
  } else{
    alert("Invalid Admin ID and/ Password");
  }
}

//logs out an admin
function logOut(){
  sessionStorage.removeItem("activeUser");
  window.location.href = "admin-login-page.html";
}

//contains the names of buildings, locations within the buildings and paths which leads to the buildings
let buildingDataArray = [
  {
    name: "Main Building",
    image: "def-loc-img.jpg",
    description: "Description",
    locations: [
      {
        image: "def-loc-img.jpg",
        name: "Main Building",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Executive Wing",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Head, Human Resource",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "A.G Director, Works and Physical Development",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Main Building Washrooms - Top",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Dep. Director of Finance",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Internal Audit",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "HR. Department",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Information Technology Support Services Office",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Library",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Information Center",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Dr. Eva Von Hirsch Auditorium",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "GCTU Bookshop",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Admissions Office",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Accounts Reconciliation",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Office of the Dean of Student Affairs",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "President's Conference Room",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Accounts Receivable/ Accounts Office",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Video Conference Center",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Main Building Washrooms - Ground",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Graduate Resource Center",
        description: "Description",
      },
    ],
    paths: [],
    nameCoords: 
      {
        x1: 99,
        x2: 183,
        y1: 113,
        y2: 147,
      },
    position: {
      x: 180,
      y: 200
    }
  },
  {
    name: "Block B",
    image: "def-loc-img.jpg",
    description: "Description",
    locations: [
      {
        image: "def-loc-img.jpg",
        name: "Block B",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Lectures Resource Center",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Academic Affairs Directorate",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Switching Lab",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Block B Washrooms - Ground",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "CPD Office",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Computer Lab",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Center for Online Learning and Teaching (COLT)",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Software Systems Unit",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Security Office",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "B1",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "B2",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Block B Washrooms - Top",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Final Year Project Room",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "B3",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "B4",
        description: "Description",
      },
    ],
    paths: [],
    nameCoords: 
      {
        x1: 51,
        x2: 104,
        y1: 213,
        y2: 233,
      },
    position: {
      x: 100,
      y: 220
    }
  },
  {
    name: "Cafeteria",
    image: "def-loc-img.jpg",
    description: "Description",
    locations: [
      {
        image: "def-loc-img.jpg",
        name: "Cafeteria",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "GCTU Radio",
        description: "Description",
      },
    ],
    paths: [],
    nameCoords: 
      {
        x1: 46,
        x2: 103,
        y1: 333,
        y2: 353,
      },
    position: {
      x: 100,
      y: 340
    }
  },
  {
    name: "Engineering Block",
    image: "def-loc-img.jpg",
    description: "Description",
    locations: [
      {
        image: "def-loc-img.jpg",
        name: "Engineering Block",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "HOD - Computer Engineering",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "HOD - Electrical/ Electronics Engineering",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "HOD - Telecom Engineering",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Office of the Dean Faculty of Engineering",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Electronics Lab",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Energy Systems Lab",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Reprographic Center",
        description: "Description",
      },
      {
        image: "def-loc-img.jpg",
        name: "Engineering Conference Center",
        description: "Description",
      },
    ],
    paths: [],
    nameCoords: 
      {
        x1: 190,
        x2: 304,
        y1: 296,
        y2: 311,
      },
      position: {
      x: 240,
      y: 300
    }
  },
  {
    name: "Hostel Block A",
    image: "def-loc-img.jpg",
    description: "Description",
    locations: [
      {
        image: "def-loc-img.jpg",
        name: "Hostel Block A",
        description: "Description",
      },
    ],
    paths: [],
    nameCoords: 
      {
        x1: 45,
        x2: 135,
        y1: 392,
        y2: 410,
      },
      position: {
      x: 120,
      y: 400
    }
  },
  {
    name: "Hostel Block B",
    image: "def-loc-img.jpg",
    description: "Description",
    locations: [
      {
        image: "def-loc-img.jpg",
        name: "Hostel Block B",
        description: "Description",
      },
    ],
    paths: [],
    nameCoords: 
      {
        x1: 136,
        x2: 220,
        y1: 453,
        y2: 470,
      },
      position: {
      x: 200,
      y: 460
    }
  },
  {
    name: "Hostel Block C",
    image: "def-loc-img.jpg",
    description: "Description",
    locations: [
      {
        image: "def-loc-img.jpg",
        name: "Hostel Block C",
        description: "Description",
      },
    ],
    paths: [],
    nameCoords: 
      {
        x1: 190,
        x2: 280,
        y1: 419,
        y2: 441,
      },
    position: {
      x: 260,
      y: 420
    }
  },
  {
    name: "Airport",
    image: "def-loc-img.jpg",
    description: "Description",
    locations: [
      {
        image: "def-loc-img.jpg",
        name: "Airport",
        description: "Description",
      },
    ],
    paths: [],
    nameCoords: 
      {
        x1: 231,
        x2: 277,
        y1: 373,
        y2: 393,
      },
    position: {
      x: 260,
      y: 360
    }
  },
  {
    name: "Graduate School",
    image: "def-loc-img.jpg",
    description: "Description",
    locations: [
      {
        image: "def-loc-img.jpg",
        name: "Graduate School",
        description: "Description",
      },
    ],
    paths: [],
    nameCoords: 
      {
        x1: 264,
        x2: 364,
        y1: 352,
        y2: 373,
      },
      position: {
      x: 280,
      y: 360
    }
  },
  {
    name: "GCTU Great Hall",
    image: "def-loc-img.jpg",
    description: "Description",
    locations: [
      {
        image: "def-loc-img.jpg",
        name: "GCTU Great Hall",
        description: "Description",
      },
    ],
    paths: [],
    nameCoords: 
      {
        x1: 7,
        x2: 102,
        y1: 454,
        y2: 474,
      },
      position: {
      x: 80,
      y: 460
    }
  },
  {
    name: "Bush Canteen",
    image: "def-loc-img.jpg",
    description: "Description",
    locations: [
      {
        image: "def-loc-img.jpg",
        name: "Bush Canteen",
        description: "Description",
      },
    ],
    paths: [],
    nameCoords: 
      {
        x1: 48,
        x2: 120,
        y1: 494,
        y2: 520,
      },
    position: {
      x: 100,
      y: 500
    }
  },
  {
    name: "Football Field",
    image: "def-loc-img.jpg",
    description: "Description",
    locations: [
      {
        image: "def-loc-img.jpg",
        name: "Football Field",
        description: "Description",
      },
    ],
    paths: [],
    nameCoords: 
      {
        x1: 129,
        x2: 221,
        y1: 570,
        y2: 592,
      },
    position: {
      x: 160,
      y: 560
    }
  },
];

//returns a copy of all building locations as an array sorted in alphabetical order
function sortLocationsAlphabetically() {
  let allLocationsArray = [];
  loadBuildingDataArray();
  buildingDataArray.map((item, index) => {
    for (i = 0; i < item.locations.length; i++) {
      tempLocObj = {
        image: item.locations[i].image,
        name: item.locations[i].name,
        description: item.locations[i].description,
        buildingIndex: index,
        locationIndex: i,
      };
      allLocationsArray.push(tempLocObj);
    }
  });

  allLocationsArray.sort((a, b) => a.name.localeCompare(b.name));
  return allLocationsArray;
}


// function saveData(){
//   document.getElementById("save-btn").addEventListener("click", 
//   //save file
// async () =>{
//   // const response = await fetch("http://wordjumble.atwebpages.com/path-finder-data/save-data.php", {
//   //   method: "POST",
//   //   headers: { "Content-Type": "application/json" },
//   //   body: JSON.stringify({content: buildingDataArray})
//   // });

//   // const result = await response.text();
//   // alert(result);
//   action();
  
//  }
// );
// }

function saveData(){
  let stringBuildingDataArray = JSON.stringify(buildingDataArray);
  fetch("http://wordjumble.atwebpages.com/path-finder-data/save-data.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: `data=${stringBuildingDataArray}`,
      })
      .then((response) => response.text())
      .then((res) => (console.log(res)));
}

function loadData(){
  async () => {
  const response = await fetch("http://wordjumble.atwebpages.com/path-finder-data/read-data.php");
  const text = await response.text();

  console.log(text);
  let buildingDataArray = JSON.parse(text);
}
}

//saves the buildingDataArray to server or local storage
function saveBuildingDataArray() {
  
  // const response = await fetch("http://wordjumble.atwebpages.com/path-finder-data/save-data.php", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({content: buildingDataArray})
  // });

  // const result = await response.text();
  // alert(result);

  // let stringBuildingDataArray = JSON.stringify(buildingDataArray);
  // fetch("http://wordjumble.atwebpages.com/path-finder-data/save-data.php", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  //       },
  //       body: `data=${stringBuildingDataArray}`,
  //     })
  //     .then((response) => response.text())
  //     .then((res) => (console.log(res)));
  let stringBuildingDataArray = JSON.stringify(buildingDataArray);
    localStorage.setItem("buildingDataArray", stringBuildingDataArray);
  
  loadBuildingDataArray();
  
  
}



//loads the saved buildingDataArray from server or local storage
function loadBuildingDataArray() {

  //attempts to load data from server
  // async () => {
  // const response = await fetch("http://wordjumble.atwebpages.com/path-finder-data/read-data.php");
  // const text = await response.text();
  // console.log(text);
  // res = isValidJSON(text);
  
  // if(res !== false){
  //   let storedBuildingDataArray = JSON.parse(result);
  //   buildingDataArray = storedBuildingDataArray;
  //   return;
  // }
  // alert("Could not load building data from server. Default data will be used instead.");
  // let storedBuildingDataArray = JSON.parse(
  //   localStorage.getItem("buildingDataArray")
  let storedBuildingDataArray = localStorage.getItem("buildingDataArray");
  if (storedBuildingDataArray !== null) {
    buildingDataArray = JSON.parse(storedBuildingDataArray);
  }
}

  
//indicates the chosen location on the map
function showLocation(){
  var location = document
      .getElementById("searchInput")
      .value.trim();
  clearAllLocationMakers();

    if (
      location == "Main Building" ||
      location == "Executive Wing" ||
      location == "Head, Human Resource" ||
      location == "A.G Director, Works & Physical Development" ||
      location == "Main Building Washrooms - Top" ||
      location == "Dep. Director of Finance" ||
      location == "Internal Audit" ||
      location == "HR. Department" ||
      location == "Information Technology Support Services Office" ||
      location == "Library" ||
      location == "Information Center" ||
      location == "Dr. Eva Von Hirsch Auditorium" ||
      location == "GCTU Bookshop" ||
      location == "Admissions Office" ||
      location == "Accounts Reconciliation" ||
      location == "Office of the Dean of Student Affairs" ||
      location == "President's Conference Room" ||
      location == "Accounts Receivable/ Accounts Office" ||
      location == "Video Conference Center" ||
      location == "Main Building Washrooms - Ground" ||
      location == "Graduate Resource Center"
    ) {
      mainBuildingMarker.addTo(map);
    } else if (
      location == "Block B" ||
      location == "Lectures Resource Center" ||
      location == "Academic Affairs Directorate" ||
      location == "Switching Lab" ||
      location == "Block B Washrooms - Ground" ||
      location == "CPD Office" ||
      location == "Computer Lab" ||
      location == "Center for Online Learning and Teaching (COLT)" ||
      location == "Software Systems Unit" ||
      location == "Security Office" ||
      location == "B1" ||
      location == "B2" ||
      location == "Block B Washrooms - Top" ||
      location == "Final Year Project Room" ||
      location == "B3" ||
      location == "B4"
    ) {
      blockBMarker.addTo(map);
    } else if (location == "Cafeteria" || location == "GCTU Radio") {
      cafeteriaMarker.addTo(map);
    } else if (location == "Hostel Block A") {
      hostelBlockAMarker.addTo(map);
    } else if (
      location == "Engineering Block" ||
      location == "HOD - Computer Engineering" ||
      location == "HOD - Electrical/ Electronics Engineering" ||
      location == "HOD - Telecom Engineering" ||
      location == "Office of the Dean Faculty of Engineering" ||
      location == "Electronics Lab" ||
      location == "Energy Systems Lab" ||
      location == "Reprographic Center" ||
      location == "Engineering Conference Center"
    ) {
      engineeringBlockMarker.addTo(map);
    } else if (location == "Hostel Block B") {
      hostelBlockBMarker.addTo(map);
    } else if (location == "Hostel Block C") {
      hostelBlockCMarker.addTo(map);
    } else if (location == "Airport") {
      airportMarker.addTo(map);
    } else if (location == "Graduate School") {
      graduateSchoolMarker.addTo(map);
    } else if (location == "GCTU Great Hall") {
      greatHallMarker.addTo(map);
    } else if (location == "Bush Canteen") {
      bushCanteenMarker.addTo(map);
    } else if (location == "Football Field") {
      footballFieldMarker.addTo(map);
    } else if (location == "Get current location") {
      // (startX = userX), (startY = userY);
      //userX = startX, userY = startY;
    }  
}

// function isValidJSON(str){
//   try{
//     JSON.parse(str);
//     return true;
//   } catch (e){
//     return false;
//   }
// }

//console.log(buildingDataArray);
//localStorage.removeItem('buildingDataArray');

window.onload = loadBuildingDataArray();
sortLocationsAlphabetically();
