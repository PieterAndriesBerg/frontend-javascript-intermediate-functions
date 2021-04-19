// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

// we hebben nodig:
// string.slice()

function getEmailDomain(emailadres) {
    let index = emailadres.indexOf("@");
    let domain = emailadres.slice(index);
    return domain.substring(1);
    
}

console.log(getEmailDomain("testing123@outlook.com"));


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
function typeOfEmail(emailadres){
    let student;
    let medewerker;
    let extern;
    if (emailadres.includes("@novi.nl")) {
         return medewerker = "Medewerker";
    } else if(emailadres.includes("@novi-education.nl")) {
       return student = "Student";
    } else if (emailadres.includes("@")){
        return extern = "Extern";
    }

}

console.log(typeOfEmail("n.eeken@novi-education.nl"));



/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
function checkEmailValidity(emailadres) {

   // split the email in 2 parts if it contains @
   if (emailadres.includes("@")) {
       let emailParts = emailadres.split("@");
       let emailName = emailParts[0];
       let emailDomain = emailParts[1];

        //check if email contains , return false if its true
        if (emailadres.includes(",")) {
            console.log("Email cannot include ,");
            return false;
        }

       //domain must include . but not start with it
       if (emailDomain.indexOf(".") <= 0){
           console.log("Domain must include . but not start with it");
           return false;
       } else if (emailDomain.endsWith(".")) {
           console.log(". cannot be at the end");
           return false;
       }
       
   } else {
       console.log("Email adres needs to contain @");
       return false
   }

   return true;

}


console.log(checkEmailValidity("tessmellink@novi,nl"));