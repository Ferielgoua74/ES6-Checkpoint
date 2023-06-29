const fireAndFury = (a) => {

     var keyWordsFIRE = (a.match(/FIRE/g) || []).length;
     var keyWordsFURY = (a.match(/FURY/g) || []).length;

     var repeatTextFIRE = "and you";
     var repeatTextFURY = "really";

     var text1 = "You are fired!";
     var text2 = "I am furious.";

     let tweetFINAL = "";
     
     let textFIRE = [];
     let textFURY = "";
     
       if(['E', 'F', 'I', 'R', 'U', 'Y'].includes([...a])){
          console.log("true");
       }
       else
          console.log("false");
     
            

}


fireAndFury("YYFIREYYFIREYYFIRE");
