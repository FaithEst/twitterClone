// register users
document.getElementById("submit").onclick = function(e){
    e.preventDefault();
    let userName = document.getElementById("userName").value;
    let phone = document.getElementById("phone").value;
    let myemail = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(myemail, password).then((userCredentials) => {
        console.log("user created successfully");
        firebase.firestore().collection("users").doc().set({
            userName:userName,
            phoneNumber: phone,
            email: myemail,
            userId:userCredentials.user.uid
        }).then(() => {
            console.log("Document successfully written!");
            window.location.href = "homepage.html";
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        
    });
}
//end

// login users
document.getElementById("signIn").onclick = function(){
    document.getElementById("secThree").style.display = "block";
}
    //firebase auth
document.getElementById("login").onclick = function(e){
    e.preventDefault();
    let userInput = document.getElementById("userInput").value;
    let loginPassword = document.getElementById("loginPassword").value;

    firebase.auth().signInWithEmailAndPassword(userInput, loginPassword)
    .then((credentials) => {
        alert("successful");
        window.location.href = "homepage.html";
    });
}

// reset password
document.getElementById("forgotPassword").onclick = function(){
    document.getElementById("secFour").style.display = "block";
}
document.getElementById("sendEmail").onclick = function(){
    let emailReset = document.getElementById("emailReset").value;

    firebase.auth().sendPasswordResetEmail(emailReset)
    .then(() => {
        alert("successful");
    })
}

// code for placing section two display when btn is clicked and hide it when not needed
let secTwo = document.getElementById("secTwo");
secTwo.style.display = "none";
// authentication code
document.getElementById("btnEmail").onclick = function (e){
    e.preventDefault();
    secTwo.style.display = "block";
}
// code for 'close icon' to close the page when the icon is clicked 
document.getElementById("closeIcon").onclick = function(){
    secTwo.style.display = "none";
}
document.getElementById("close").onclick = function(){
    secThree.style.display = "none";
}
document.getElementById("closeIcon3").onclick = function(){
    secFour.style.display = "none";
}

// 'use email or phone'
document.getElementById("useEmail").onclick = function(){
    let emailDiv = document.getElementById("emailDiv");
    let phoneDiv = document.getElementById("phoneDiv");
    phoneDiv.style.display = "none";
    emailDiv.style.display = "block";
    document.getElementById("useEmail").style.display = "none";
    document.getElementById("usePhone").style.display = "block";
}
document.getElementById("usePhone").onclick = function(){
    let emailDiv = document.getElementById("emailDiv");
    let phoneDiv = document.getElementById("phoneDiv");
    phoneDiv.style.display = "block";
    emailDiv.style.display = "none";
    document.getElementById("useEmail").style.display = "block";
    document.getElementById("usePhone").style.display = "none";
}

// ------------sign up google
document.getElementById("google").onclick = function(){
    let provider = new firebase.auth.GoogleAuthProvider();
    // --------using pop up
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}