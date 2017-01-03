/**
 * Created by mrlef on 1/3/2017.
 */


// Question 1 - "Use Strict" -----------------------------------------------------------------------------

/*
 Use Strict gør at man f.eks ikke kan bruge "ikke deklarerede" variabler.

 Eksempelvis vil nedenstående ikke virke:
 */
 // "use strict";
 // myFunction();
 //
 // function myFunction() {
 // y = 3.14;
 // }

/*
Så "use strict" bruges til at skrive "sikker" javascript. Altså at forskellige "bad syntax" vil smide en exception.
*/






// Question 2 - Variable/function-Hoisting ----------------------------------------------------------------

/*
 I Javascript findes Hoisting. Dette vil sige at funktioner bliver ”komplet hoisted”.
 Altså kan man køre en funktion selvom den først bliver deklareret længere nede.

 Det samme gør sig gældende ved variabler dog bliver de ikke komplet hoisted.
 Det vil sige man kan godt ”bruge” en variabel før den er deklareret, men hvis den vil være ”undefined”.

 Eksempelvis:
 */

// console.log("Her er a: " + a) // giver undefined
// var a = "lars"
// console.log("Her er a deklareret: " + a) // giver "lars"







// Question 3 - "this" i Javascript -------------------------------------------------------------------------

/*
   "This" i javascript kommer an på hvor "this" bliver brugt.

   Kalder man f.eks "this" som nedenfor, så er "this" window - altså det globale object.
 */
 // function myFunction() {
 // return this;
 // }
 // console.log(myFunction());

/*
   Mens hvis man bruger "this" inden i et object, så er "this" objectet - som vist nedenfor:
*/

 // var myObject = {
 //     firstName:"John",
 //     lastName: "Doe",
 //     fullName: function () {
 //        return this.firstName + " " + this.lastName;
 //        }
 //     }
 // console.log(myObject.fullName());  // returnerer "John Doe"

/*
   ********* This i Java referer til "the current object".
*/







// Question 4 - Function closures and the Javascript Module Pattern -----------------------------------

/*
 Closure...
 ...er hvor man har kontrol over hvorvidt en variabel er tilgængelig globalt eller lokalt.
 Det vil sige en variabel deklareret udenfor en funktion er globalt tilgængelig,
 mens en variabel deklareret indeni en funktion kun er tilgængelig i den funktion (altså lokalt scope for den funktion).

 */
 // var variable1 = 1; // Not within a function: Global Scope
 //
 // function funcName() {
 //    variable2 = 2; // No var keyword: Global Scope
 //    var variable3 = 3; // Local Scope only
 //    console.log(variable1); //Virker på grund af at variable1 er global.
 // }
 // funcName();
 //
 // console.log(variable2); // returnerer 2
 // console.log(variable3); // returnerer ReferenceError: variable3 is not defined.




/*
-----------------------------------------------------------------------


Modular...
...er hvor man kan have forskellige funktioner inden i én funktion. Dvs man kan kalde de forskellige funktioner på det object.

 */
 // var modularpattern = (function() {
 // // your module code goes here
 //    var sum = 0 ;
 //     return {
 //        add:function() {
 //        sum = sum + 1;
 //        return sum;
 //        },
 //     reset:function() {
 //        return sum = 0;
 //        }
 //    }
 // }());
 //
 // console.log(modularpattern.add());  // returnerer 1
 // console.log(modularpattern.add());  // returnerer 2
 // console.log(modularpattern.reset());  //returnerer 0






/* Question 5 Immediately-Invoked Function Expressions (IIFE) ------------------------------------------

 Når man bruger Immediately-Invoked Function Expression så betyder det at funktionen bliver kørt med det samme.
 Putter man den funktion i en variabel så betyder det variablen indenholder resultated og ikke funktionen.
 */

 // var a = (function(){
 // var b = 10;
 // return b;
 // }());
 // // A er her = 10.





// Question 6 - Prototypes -------------------------------------------------------------------------------------

/*
 7)	Alle Javascript objekter har en prototype. Prototypen er også et objekt.
 Alle JS objekter arver deres properties og metoder fra deres prototype.

 Javascripts prototype er deres skelet (læs constructor). Et skelet man kan tilføje til, både properties og methods. Feks:

 */

// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }
// Person.prototype.name = function() {
//     return this.firstName + " " + this.lastName;
// };
// Person.prototype.nationality = "Danish"
//
// var p = new Person("s", "p", 12, "blue")
// console.log(p.name()) //returnerer s p
// console.log(p.nationality)  // returnerer "Danish"






// Question 7  Debugger to explain the basic things all objects inherits from object ---------------------------------

// var a = {}
// debugger;

//Hvis man herefter trykker "Run - debug" så vil man under Debugger kunne se alt hvad a, som object, arver fra super objectet.








// Question 8 User defined callback functions -------------------------------------------------------------------------

//En callback function er en function som bliver ”passed” til en anden function som et parameter.
// Den callback function er så kaldt (kørt) inden i den anden function.

// var names = ["kurt","ole","ib"];
//
// function myforEach(arr,callback){
//     for(var i =0; i < arr.length; i++){
//         callback(arr[i]);
//     }
// }
//
// myforEach(names,function(name){
//     console.log(name);  // returnerer "kurt", "ole", "ib".
// });







// Question 9 Explain generally about node.js and NPM ----------------------------------------------------------------

/*
Node.JS er en platform, bygget på Chrome's JavaScript runtime, til at bygge hurtige og "scalable" network applikationer.
Node.js er event-dreven og non-blocking.


npm er en Node.js package manager. Man kan bruge den til at installerer node programs.
 */






// Question 10 Event Loop ---------------------------------------------------------------------------------------------

/*
Node.js event loop kører på én enkelt tråd. Node.js selv kører på flere tråde "under", men dem "rører" man aldrig ved
når man skriver kode i Node.js.

Ethvert kald som involverer et I/O kald, skal også have en callback. Dette kald returnerer med det samme, hvilket
tillader at man laver flere I/O operations parrallelt uden at man bruger tråde. Så snart en I/O operation er færdig
bliver det's callback skuppet til Event Loop(et). Her vil det blive eksekveret så snart de andre callbacks som må
ligger foran er eksekveret.
 */








// Question 11 Provide examples of user defined reusable modules implemented in Node.js -------------------------------
/*
Man kan require en fil (eller en funktion eller variabel, alt efter hvad man vælger at exportere.
Dette kan så genbruges, hvor end man "require" det.
 */

// var myModule = require('./question11_example')
//
// myModule.b("hej")
