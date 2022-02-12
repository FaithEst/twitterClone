firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log("logged in");
        let userId = user.uid;
        console.log(userId);
    }else{
        window.location.href = "./index.html";
    }
 });