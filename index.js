// Comande pour retrouver la classe d'un objet : objt.constructor.name

export class Cours {   // Exemple : Language de balisage
    constructor (nom, nombre_heures,etat_cours, ordre_prio, mot_cle, description){
        this.nom = nom.toLowerCase();               //str  passé en lettre minuscule
        this.nombre_heures = +(nombre_heures);         //number
        this.etat_cours = etat_cours;               // true = finis / false = pas encore finis
        this.ordre_prio = +(ordre_prio);               // number (1,2,3,4) tout les 1 passe avant tout les 2 ect ... / 0 si bas-les-couille
        this. mot_cle = mot_cle.map((e)=>e.toLowerCase());        // liste de str qui reprennent des mot associés au cours afin de le retrouver plus facilement (passée en minuscule)
        this.description = description;             // courte description du cours
    }
}

export class Formation {       //Exemple : X75 Dev Web
    constructor (nom){
        this.nom = nom;                     // Str 
        this.cours = [];                     // Liste d'objet de classe Cours
    }
}

export class Classe {
    constructor(nom_classe, nom_formation, JN, nombre_eleves){
        this.nom_classe = nom_classe;            // STR 
        this.nom_formation = nom_formation;      // Objet de classe Formation
        this.JN = JN;                            // Str Jour ou Nuit (potentielement switch en booleen)
        this.nombre_eleves = +(nombre_eleves)   // Number 
        this.mail_eleves = []                   // Liste contenant les email de chaque élève de la classe (vide par défaut)
    }
}

export class Jour{
    constructor(matin=true, apresmidi=true, soir=true){  // Par defaut un Jour est libre toute la journée
        this.matin = matin;                              // true = crénaux libre
        this.apresmidi = apresmidi;                      // false = crénaux occuper
        this.soir = soir;
    }
}

export class Semaine{
    constructor(){
        this.lundi = new Jour();
        this.mardi = new Jour();
        this.mercredi = new Jour();
        this.jeudi = new Jour();
        this.vendredi = new Jour();
        this.samedi= new Jour(true,false,false);        // Samedi, seul le matin est libre par défaut
    }
}

export class Prof  {
    constructor(nom, cours_donne, disponibilite){
        this.nom = nom;                                 // STR
        this.cours_donne = cours_donne;                 // Liste d'objet de classe cours qui represente les cours que le prof peut donner
        this.disponibilite = disponibilite              // Objet de classe Semaine remplie avec les bonnes variable chaque jours pour les dispo du prof
    }
}