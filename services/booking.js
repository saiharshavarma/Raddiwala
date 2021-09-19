// Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      var firebaseConfig = {
        apiKey: "AIzaSyCILXZxgYqF_MV2x45dMbfhG17fPr8y9x0",
        authDomain: "raddiwala-e37c6.firebaseapp.com",
        databaseURL: "https://raddiwala-e37c6-default-rtdb.firebaseio.com",
        projectId: "raddiwala-e37c6",
        storageBucket: "raddiwala-e37c6.appspot.com",
        messagingSenderId: "178533211336",
        appId: "1:178533211336:web:1966fa6e7a8a7660d259fd",
        measurementId: "G-B6BX1P96TD"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();


// Listen for form submit

var bookRef = firebase.database().ref('bookings');

// document.getElementById("bookRaddiwala").addEventListener("submit", bookForm);


//Submit Form
function bookForm() {

    // Get values
    var date = getInputVal("bdate");
    var time = getInputVal("btime");
    var name = getInputVal("first_name") + " " + getInputVal("last_name");
    var address = getInputVal("address");
    var city = getInputVal("town");
    var pin = getInputVal("pin-code");
    var email = getInputVal("email");
    var phone = getInputVal("phone-number");

    saveData(date, time, name, address, city, pin, email, phone);

    alert("Booking Successful");

    // show alert
/*
    document.getElementById('alert').style.display = 'block';

    // Hide after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 2000); 

    document.getElementById('bookRaddiwala').reset();*/
}

// Function to get Form values

function cancelForm(){
    alert("Booking Canceled");
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save messages

function saveData(date, time, name, address, city, pin, email, phone){
    var newbookingRef = bookRef.push();
    newbookingRef.set({
        date: date,
        time: time, 
        name: name, 
        address: address, 
        city: city, 
        pin: pin, 
        email: email, 
        phone: phone
    });
}