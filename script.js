function getRandom(min, max)
        
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
 const TeamNumber =2;
const SaveListe = [
"piere",
"jeans",
"marie",
"jeanne",
"damien",
"Emilie",
"George"];
let Liste= SaveListe
let number = liste.length ;
const DivNumber = parseInt(  number/TeamNumber);
//    for ( var i = 0; i < number; i++ ) 
//    {
//         console.log(liste);
//         let numberb = liste.length -1 ;
//         console.log(numberb);
       

//         let random  = getRandom(0, numberb);
//         console.log(random);
//         console.log(liste[random]);
        
//         liste.splice([random],1);
//     }
   function choix() 
    {
        let numberb = liste.length -1;
        let random  = getRandom(0, numberb);
        let teammate =liste[random];
        liste.splice([random],1);
        return teammate;
     }
for (var y = 0; y < DivNumber; y++ )
     { var equipe = "";
         for (Z = 0; Z < TeamNumber; Z++  )
         {
            equipe = equipe + " "+ choix() ;
         }
         console.log(equipe)
     }
