class Personnage {

    constructor(sante, degats){
        this.sante = sante;
        this.degats = degats;
    }

    attaque(cible){
        if (cible instanceof Personnage){
            cible.sante -= this.degats;
        } else {
            alert('Erreur : la cible n\'est pas de type personnage')
        }
    }
}