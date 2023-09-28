import {Cours, Formation, Classe, Jour, Semaine, Prof, Horaire, Local} from "../index.js"
// Ce fichier initialise toutes les classe afin de pouvoir tester les algorithme de tris
let X75 = new Formation("Developpement Web Front End 1ere année");
let X77 = new Formation("Reseau premiere année");
let X78 = new Formation("Cybersecurité premiere année");
let X75b = new Formation("DevWeb 2 eme année");
let X77b = new Formation("Reseau 2 eme année");
let X78b = new Formation('CyberSecurité 2 eme année');
X75.cours.push(
    new Cours("Atelier développement,base",60,1, "",""),
    new Cours("Anglais", 40,1,"",""),
    new Cours("Language de balisage", 64, 1, "",""),
    new Cours("Language de programmation, base", 80,2),
    new Cours("Language de Base de donée, base", 48,3,"",""),
    new Cours("Metier de devloppeur, base", 24, 2, "",""),
    new Cours("Workshop ", 24,3)
    )
X77.cours.push(
    new Cours("Le reseau",60,1, "",""),
    new Cours("Anglais", 40,1,"",""),
    new Cours("les cable", 64, 1, "",""),
    new Cours("Les router, base", 80,2),
    new Cours("Les switch", 48,3,"",""),
    new Cours("Le wify", 24, 2, "",""),
    new Cours("Le lan ", 24,3)
)
X78.cours.push(
    new Cours("Html",60,1, "",""),
    new Cours("Anglais", 40,1,"",""),
    new Cours("CSS", 64, 1, "",""),
    new Cours("BDD", 80,2),
    new Cours("Reseau base", 48,3,"",""),
    new Cours("Cybersecu WEB", 24, 2, "",""),
    new Cours("Cyber secu APP ", 24,3)
    )
X75b.cours.push(
    new Cours("Atelier développement,2",60,1, "",""),
    new Cours("Anglais 2", 40,1,"",""),
    new Cours("Language de balisage 2", 64, 1, "",""),
    new Cours("Language de programmation, 2", 80,2),
    new Cours("Language de Base de donée, 2", 48,3,"",""),
    new Cours("Metier de devloppeur, 2", 24, 2, "",""),
    new Cours("Workshop 2 ", 24,3)
    )
X77b.cours.push(
    new Cours("Le reseau 2",60,1, "",""),
    new Cours("Anglais 2", 40,1,"",""),
    new Cours("les cable 2", 64, 1, "",""),
    new Cours("Les router, 2", 80,2),
    new Cours("Les switch 2", 48,3,"",""),
    new Cours("Le wify 2", 24, 2, "",""),
    new Cours("Le lan 2", 24,3)
)
X78b.cours.push(
    new Cours("Html",60,1, "",""),
    new Cours("Anglais", 40,1,"",""),
    new Cours("CSS", 64, 1, "",""),
    new Cours("BDD", 80,2),
    new Cours("Reseau base", 48,3,"",""),
    new Cours("Cybersecu WEB", 24, 2, "",""),
    new Cours("Cyber secu APP ", 24,3)
    )

let listeClasses = [
    new Classe('Dev Web Jour 1', X75,'J',14),
    new Classe('Dev web Jour 2', X75b, 'J', 7),
    new Classe('Reseau 1', X77,'J',12),
    new Classe('Reseau 2', X77b, 'J', 8),
    new Classe('CyberSécu 1', X78,'J',10),
    new Classe('CyberSécu 2', X78b, 'J', 5)
]
let Local1 = new Local(); // Locaux seulement dispo en journée
let Local2 = new Local().removeDispo('soir');

Local1.disponibilite.lundi['soir'] = false

console.log(Local2.disponibilite)


