$(document).ready(function() {

   var hiddenCounter = 0;
   var infiniteCounter = 0;
   var message = ["C'est presque la fin !", "T'as pas mal au doigt ?", 
   				"Je m'ennuie... tu pars quand ?", "Faignasse !", "Tu es encore là ?", 
				"Je vois que tu es quelqu'un de pugnace", "Continue, il y aura peut être une surprise à 999 clicks !"];

   $("img").click(function() {
       infiniteCounter++;
       hiddenCounter++
       $("span").html(infiniteCounter);
       if (infiniteCounter == 20) {
           alert("N'as-tu rien d'autre à faire ??");
           hiddenCounter = 0;
           console.log(hiddenCounter); 
       } if (infiniteCounter == 999 ) {
       	alert ("Bravo ! Tu as gagné un gateau. Maintenant tu peux recommencer ! Y aura-t-il une autre surprise ? A toi de le vérifier.")
       	infiniteCounter == 0 
       } else if (hiddenCounter == 20 && hiddenCounter < 999) {
       		hiddenCounter = 0;
       		alert(message[Math.floor(Math.random()*4)]);
       }
   });

});