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
