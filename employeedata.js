

var firebaseConfig = {
    apiKey: "AIzaSyAd1AYGNvo93STPZNlGBpnVtE3azSLje6s",
    authDomain: "employee-data-3c8cd.firebaseapp.com",
    databaseURL: "https://employee-data-3c8cd.firebaseio.com",
    projectId: "employee-data-3c8cd",
    storageBucket: "employee-data-3c8cd.appspot.com",
    messagingSenderId: "30687446265",
    appId: "1:30687446265:web:d2b7b8287e525d48340e28"
};

//   Initialize Firebase
firebase.initializeApp(firebaseConfig);


var database = firebase.database();

var eName = "";
var role = "";
var startDate = "";
var rate = "";

$("#eSubmit").on("click", function(event){
    event.preventDefault();


 // Grabbed values from text-boxes
 eName = $("#employee-name").val().trim();
 role = $("#role").val().trim();
 startDate = $("#start-date").val().trim();
 rate = $("#monthly-rate").val().trim();

var newEmp = {
dbename: eName,
dbrole: role,
dbstartdate: startDate,
dbrate: rate,

};
 database.ref().push(newEmp);

//  logs everything to console
console.log(newEmp.dbename);
console.log(newEmp.dbrole);
console.log(newEmp.dbstartdate);
console.log(newEmp.dbrate);


alert("Emploee successfully added");

// Clears all of the text-boxes
$("employee-name").val("");
$("role").val("");
$("start-date").val("");
$("monthly-rate").val("");

});

database.ref().on("child_added", function(snapshot) {

    var sv = snapshot.val();
 

    console.log(sv.dbename);
    console.log(sv.dbrole);
    console.log(sv.dbstartDate);
    console.log(sv.dbrate);

    
}, function(errorObject){
    console.log("Errors handled: " + errorObject.code);


  });