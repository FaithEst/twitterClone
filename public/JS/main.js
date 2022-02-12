document.getElementById("tweetBtn1").onclick = function(){
   let whatsHappening = document.getElementById("whatsHappening").value;
   let tweetDate = new Date();
   firebase.firestore().collection("tweet").doc().set({
        tweet: whatsHappening,
        date: tweetDate
   });
   firebase.firestore().collection("tweet").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

         let timeStamp = doc.data().date;

         let dateConvert = timeStamp.toDate().toDateString();
         let dateTime = document.getElementById("dateTime");
         dateTime.innerHTML = dateConvert;
         
         console.log("success");
      });
   });
}
