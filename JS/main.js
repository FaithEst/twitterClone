document.getElementById("tweetBtn1").onclick = function(){
   let whatsHappening = document.getElementById("tweetBtn1").value;
   let tweetDate = new Date();
   firebase.firestore().collection("tweet").doc().set({
        tweet: whatsHappening,
        date: tweetDate
   });
}