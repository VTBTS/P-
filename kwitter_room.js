var firebaseConfig = {
      apiKey: "AIzaSyCXjDFwe7XRDDijBQ-Phun0XPEjt7K3E6M",
      authDomain: "kittwer3.firebaseapp.com",
      projectId: "kittwer3",
      storageBucket: "kittwer3.appspot.com",
      messagingSenderId: "567958458747",
      appId: "1:567958458747:web:48250ede078c3b27792dde"
    };j
  //ADD YOUR FIREBASE LINKS
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
  
     //End code
     });});}
  getData();


function move(){
      window.location="room1.html";
}

function makee(){
      
}